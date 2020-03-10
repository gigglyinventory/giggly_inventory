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

  // Updates amounts of materials in various departments for a given amount of a given grill.
  // Querys must find the type and amount of materials for the grill and multiply them by a given
  // amount. The first query subtracts those materials from the given department. The next query
  // adds the completed materials to the next department in the production process. The next query adds 
  // (one plastic sheet and one grommet) * (given lost value) to the current departments lost field if 
  // the department is GrillVelcro, GrillStickers, or GrillPackaging, and (one plastic sheet) * 
  // (given lost value) if it's a different grill department. The last query adds materials that 
  // weren't lost back to the pre-production department.
  static updateGrills(date, design, color, department, nextDepartment, completed, lost) {
    db.query(
      'UPDATE amounts, ( \
        SELECT ? AS Date, DepartmentID, MatID, MaterialAmount * ? AS NumMats \
        FROM departments, productmaterials \
          INNER JOIN products ON productmaterials.ProdID = products.ProductID \
        WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? \
      ) AS temp \
      SET amounts.InStock = amounts.InStock - temp.NumMats \
      WHERE amounts.Date = temp.Date AND amounts.DepID = temp.DepartmentID AND amounts.MatID = temp.MatID',
      [date, completed + lost, "%"+design+"%", "%"+color+"%", "%"+department+"%"])
    db.query(
      'WITH temp AS ( \
        SELECT ? AS Date, DepartmentID, MatID, MaterialAmount * ? AS NumMats, 0 \
        FROM departments, productmaterials INNER JOIN products ON productmaterials.ProdID = products.ProductID \
        WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? \
      ) \
      INSERT INTO amounts (Date, DepID, MatID, InStock, Lost) \
      SELECT * FROM temp \
      ON DUPLICATE KEY UPDATE InStock = InStock + temp.NumMats',
      [date, completed, "%"+design+"%", "%"+color+"%", "%"+nextDepartment+"%"])
    if (department == "GrillVelcro" || department == "GrillStickers" || department == "GrillPackaging"){
      db.query(
        'UPDATE amounts, ( \
          SELECT ? AS Date, DepartmentID, MatID \
          FROM departments, productmaterials \
            INNER JOIN products ON productmaterials.ProdID = products.ProductID \
            INNER JOIN materials ON productmaterials.MatID = materials.MaterialID \
          WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? \
            AND ((MaterialName LIKE ? AND MaterialName LIKE ?) OR (MaterialName LIKE ?) \
        ) AS temp  \
        SET amounts.Lost = amounts.Lost + ? \
        WHERE amounts.Date = temp.Date AND amounts.DepID = temp.DepartmentID AND amounts.MatID = temp.MatID',
        [date, "%"+design+"%", "%"+color+"%", "%"+department+"%", "%"+color+"%", "%plastic%", "%grommet%", lost])
      return db.query( // Pre-production departmentID for Grills is 18.
        'UPDATE amounts, ( \
          SELECT ? AS Date, 18, MatID, MaterialAmount * ? AS NumMats \
          FROM productmaterials INNER JOIN products ON productmaterials.ProdID = products.ProductID \
          WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? AND MatID NOT IN ( \
            SELECT MaterialID FROM materials \
            WHERE MaterialName LIKE ? AND MaterialName LIKE ? OR MaterialName LIKE ? \
          ) \
        ) AS temp  \
        SET amounts.InStock = amounts.InStock + temp.NumMats \
        WHERE amounts.Date = temp.Date AND amounts.DepID = temp.DepartmentID AND amounts.MatID = temp.MatID',
        [date, lost, "%"+design+"%", "%"+color+"%", "%"+department+"%", "%"+color+"%", "%plastic%", "%grommet%"])
    } else {
      db.query(
        'UPDATE amounts, ( \
          SELECT ? AS Date, DepartmentID, MatID \
          FROM departments, productmaterials \
            INNER JOIN products ON productmaterials.ProdID = products.ProductID \
            INNER JOIN materials ON productmaterials.MatID = materials.MaterialID \
          WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? \
            AND MaterialName LIKE ? AND MaterialName LIKE ? \
        ) AS temp  \
        SET amounts.Lost = amounts.Lost + ? \
        WHERE amounts.Date = temp.Date AND amounts.DepID = temp.DepartmentID AND amounts.MatID = temp.MatID',
        [date, "%"+design+"%", "%"+color+"%", "%"+department+"%", "%"+color+"%", "%plastic%", lost])
      return db.query( // Pre-production departmentID for Grills is 18.
        'UPDATE amounts, ( \
          SELECT ? AS Date, 18, MatID, MaterialAmount * ? AS NumMats \
          FROM productmaterials INNER JOIN products ON productmaterials.ProdID = products.ProductID \
          WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? AND MatID NOT IN ( \
            SELECT MaterialID FROM materials \
            WHERE MaterialName LIKE ? AND MaterialName LIKE ? \
          ) \
        ) AS temp  \
        SET amounts.InStock = amounts.InStock + temp.NumMats \
        WHERE amounts.Date = temp.Date AND amounts.DepID = temp.DepartmentID AND amounts.MatID = temp.MatID',
        [date, lost, "%"+design+"%", "%"+color+"%", "%"+department+"%", "%"+color+"%", "%plastic%"])
    }
  }

  // Updates amounts of materials in various departments for a given amount of a given feet.
  // Querys must find the type and amount of materials for the feet and multiply them by a given
  // amount. The first query subtracts those materials from the given department. The next query
  // adds the completed materials to the next department in the production process. The next query adds 
  // (one blister card) * (given lost value) to the current departments lost field if the department is  
  // FeetPackaging, and (one foot) * (given lost value) if it's a different feet department. The 
  // last query adds materials that weren't lost back to the pre-production department.
  static updateFeet(date, color, department, nextDepartment, completed, lost) {
    db.query(
      'UPDATE amounts, ( \
        SELECT ? AS Date, DepartmentID, MatID, MaterialAmount * ? AS NumMats \
        FROM departments, productmaterials \
          INNER JOIN products ON productmaterials.ProdID = products.ProductID \
        WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? \
      ) AS temp \
      SET amounts.InStock = amounts.InStock - temp.NumMats \
      WHERE amounts.Date = temp.Date AND amounts.DepID = temp.DepartmentID AND amounts.MatID = temp.MatID',
      [date, completed + lost, "%paw%", "%"+color+"%", "%"+department+"%"])
    db.query(
      'WITH temp AS ( \
        SELECT ? AS Date, DepartmentID, MatID, MaterialAmount * ? AS NumMats, 0 \
        FROM departments, productmaterials INNER JOIN products ON productmaterials.ProdID = products.ProductID \
        WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? \
      ) \
      INSERT INTO amounts (Date, DepID, MatID, InStock, Lost) \
      SELECT * FROM temp \
      ON DUPLICATE KEY UPDATE InStock = InStock + temp.NumMats',
      [date, completed, "%paw%", "%"+color+"%", "%"+nextDepartment+"%"])
    if (department == "FeetKnobRemoval"){
      db.query( // continue updating from here
        'UPDATE amounts, ( \
          SELECT ? AS Date, DepartmentID, MatID \
          FROM departments, productmaterials \
            INNER JOIN products ON productmaterials.ProdID = products.ProductID \
            INNER JOIN materials ON productmaterials.MatID = materials.MaterialID \
          WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? \
            AND ((MaterialName LIKE ? AND MaterialName LIKE ?) OR (MaterialName LIKE ?) \
        ) AS temp  \
        SET amounts.Lost = amounts.Lost + ? \
        WHERE amounts.Date = temp.Date AND amounts.DepID = temp.DepartmentID AND amounts.MatID = temp.MatID',
        [date, "%"+design+"%", "%"+color+"%", "%"+department+"%", "%"+color+"%", "%plastic%", "%grommet%", lost])
      return db.query( // Pre-production departmentID for Feet is 25.
        'UPDATE amounts, ( \
          SELECT ? AS Date, 25, MatID, MaterialAmount * ? AS NumMats \
          FROM productmaterials INNER JOIN products ON productmaterials.ProdID = products.ProductID \
          WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? AND MatID NOT IN ( \
            SELECT MaterialID FROM materials \
            WHERE MaterialName LIKE ? AND MaterialName LIKE ? OR MaterialName LIKE ? \
          ) \
        ) AS temp  \
        SET amounts.InStock = amounts.InStock + temp.NumMats \
        WHERE amounts.Date = temp.Date AND amounts.DepID = temp.DepartmentID AND amounts.MatID = temp.MatID',
        [date, lost, "%"+design+"%", "%"+color+"%", "%"+department+"%", "%"+color+"%", "%plastic%", "%grommet%"])
    } else {
      db.query(
        'UPDATE amounts, ( \
          SELECT ? AS Date, DepartmentID, MatID \
          FROM departments, productmaterials \
            INNER JOIN products ON productmaterials.ProdID = products.ProductID \
            INNER JOIN materials ON productmaterials.MatID = materials.MaterialID \
          WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? \
            AND MaterialName LIKE ? AND MaterialName LIKE ? \
        ) AS temp  \
        SET amounts.Lost = amounts.Lost + ? \
        WHERE amounts.Date = temp.Date AND amounts.DepID = temp.DepartmentID AND amounts.MatID = temp.MatID',
        [date, "%"+design+"%", "%"+color+"%", "%"+department+"%", "%"+color+"%", "%plastic%", lost])
      return db.query( // Pre-production departmentID for Feet is 25.
        'UPDATE amounts, ( \
          SELECT ? AS Date, 25, MatID, MaterialAmount * ? AS NumMats \
          FROM productmaterials INNER JOIN products ON productmaterials.ProdID = products.ProductID \
          WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? AND MatID NOT IN ( \
            SELECT MaterialID FROM materials \
            WHERE MaterialName LIKE ? AND MaterialName LIKE ? \
          ) \
        ) AS temp  \
        SET amounts.InStock = amounts.InStock + temp.NumMats \
        WHERE amounts.Date = temp.Date AND amounts.DepID = temp.DepartmentID AND amounts.MatID = temp.MatID',
        [date, lost, "%"+design+"%", "%"+color+"%", "%"+department+"%", "%"+color+"%", "%plastic%"])
    }
  }
  
  // Returns the amount of products that have not been discontinued and are currently ready to ship. 
  // First it finds the type and amount of materials for each product and the current amount of those  
  // materials in the ready to ship departments. Then it divides each material by the amount needed for
  // each product and returns the minimum number among the materials needed for a product.
  static fetchReadyShip() {
    return db.query( // ReadyShip departmentID's are 34, 35, and 36.
      'WITH temp AS ( \
        SELECT ProdID, amounts.MatID, InStock, MaterialAmount \
        FROM productmaterials INNER JOIN amounts ON productmaterials.MatID = amounts.MatID \
        WHERE DepID IN (13, 18, 25) AND Date = (Select Date(CURRENT_TIMESTAMP() - INTERVAL 8 HOUR)) \
      ) \
      SELECT CAST(MIN(InStock/MaterialAmount) AS int) AS ReadyShip, ProductName \
      FROM temp INNER JOIN products ON temp.ProdID = products.ProductID \
      WHERE Discontinued = 0 \
      GROUP BY ProductName \
      ORDER BY ProductName'
    );// need to switch DepID IN to 34, 35, 36. Was changed to pre production departments for testing
  }
  
  // Returns the type and amount of materials in a given department for a given product.
  static fetchProductionStep(name, color, department) {
    return db.query(
      'WITH temp AS ( \
        SELECT DepartmentID, MatID, MaterialName \
        FROM departments, productmaterials \
          INNER JOIN products ON productmaterials.ProdID = products.ProductID \
          INNER JOIN materials ON productmaterials.MatID = materials.MaterialID \
        WHERE ProductName LIKE ? AND ProductName LIKE ? AND DepartmentName LIKE ? \
      ) \
      SELECT MaterialName, InStock, Lost \
      FROM temp INNER JOIN amounts ON temp.DepartmentID = amounts.DepID AND temp.MatID = amounts.MatID \
      WHERE ProductName LIKE ? AND ProductName LIKE ? \
        AND Date = (Select Date(CURRENT_TIMESTAMP() - INTERVAL 8 HOUR))',
      ["%"+department+"%", "%"+name+"%", "%"+color+"%"])
  }

  static discontinue(name) {
      return db.query('UPDATE products SET Discontinued = 1 WHERE productName LIKE ?', [name])
  }

  static fetchAll() {
    return db.query('SELECT * FROM products');
  }
};
