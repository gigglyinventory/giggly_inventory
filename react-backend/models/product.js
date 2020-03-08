const db = require('../util/database');

module.exports = class Product {
  constructor(name, discontinued) {
    this.name = name;
    this.discontinued = discontinued;
  }

  save() {
    return db.query('INSERT INTO products (ProductName, Discontinued) VALUES (?, ?)',
      [this.name, this.discontinued]
    );
  }

  // Updates amounts of materials in two given departments for a given amount of a given grill.
  // First it finds the type and amount of materials for the grill and multiplies them by the
  // given amount. Then it subtracts those materials from the given department. The next query
  // adds them to the next department in the production process. The last query subtracts 
  // specific materials from the current department depending on the given lost value.
  static updateGrills(date, design, color, department, nextDepartment, completed, lost) {
    db.query(
      'WITH temp AS ( \
        SELECT MatID, MaterialAmount * ? AS NumMats \
        FROM productmaterials INNER JOIN products ON productmaterials.ProdID = products.ProductID \
        WHERE ProductName like "%?%" AND ProductName like "%?%" \
      ) \
      INSERT INTO amounts (Date, DepID, MatID, InStock, Lost) \
      VALUES (?, (SELECT DepartmentID FROM departments WHERE DepartmentName like ?), \
        temp.MatID, temp.NumMats, 0) \
      ON DUPLICATE KEY UPDATE InStock = InStock + temp.NumMats',
      [completed, design, color, date, department])
    return
  }
  
  // Returns the amount of products that are ready to ship. First it finds the type and 
  // amount of materials for each product and the current amount of those materials 
  // in the ready to ship departments. Then it divides each material by the amount needed for
  // each product and returns the minimum number among the materials needed for a product.
  static fetchReadyShip() {
    return db.query(
      'WITH temp AS ( \
        SELECT ProdID, X.MatID, InStock, MaterialAmount \
        FROM productmaterials INNER JOIN amounts ON productmaterials.MatID = amounts.MatID \
        WHERE DepID IN (13, 18, 25) AND Date = CURDATE() \
      ) \
      SELECT CAST(MIN(InStock/MaterialAmount) AS int) AS ReadyShip, ProductName \
      FROM temp INNER JOIN products ON temp.ProdID = products.ProductID \
      WHERE Discontinued = 0 \
      GROUP BY ProductName \
      ORDER BY ProductName'
    );// need to switch DepID IN to 34, 35, 36. Was changed to pre production departments for testing
  }

  static fetchAll() {
    return db.query('SELECT * FROM products');
  }

  static findByName(name) {
      return db.query('SELECT * FROM products WHERE productName like "%?%"', [name])
  }

  static discontinue(name) {
      return db.query('UPDATE products SET Discontinued = 1 WHERE productName like ?', [name])
  }
};
