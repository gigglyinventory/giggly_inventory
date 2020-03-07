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

  //this is a complex query that will be implemented
  static update(name) {
    return db.query('') 
  }
  
  // Returns the amount of products that are ready to ship. First it finds the type and 
  // amount of materials for each product and the current amount of those materials 
  // in the ready to ship departments. Then it divides each material by the amount needed for
  // each product and returns the minimum number among the materials needed for a product.
  static fetchReadyShip() {
    return db.query(
      'WITH temp AS ( \
      SELECT ProdID, X.MatID, InStock, MaterialAmount \
      FROM productmaterials INNER JOIN amounts X ON productmaterials.MatID = X.MatID \
      WHERE DepID IN (13, 18, 25) AND date = \
        (SELECT MAX(date) FROM amounts WHERE MatID = X.MatID) ) \
      SELECT CAST(MIN(InStock/MaterialAmount) AS int) AS readyShip, productName \
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
      return db.query('SELECT * FROM products WHERE productName like %?%', [name])
  }

  static discontinue(name) {
      return db.query('UPDATE products SET Discontinued = 1 WHERE productName like ?', [name])
  }
};