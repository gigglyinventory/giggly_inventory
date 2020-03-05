const db = require('../util/database');

module.exports = class Inventory {

  static update() {
    return db.query('') //this is a complex query that will be implemented
  }

  // Returns the amount of raw materials in pre-production and the amount of ready
  // to ship products. To do this the query must first find what materials
  // are associated with a product, then how many of those materials are
  // in the ready to ship department, then how many must combine to make a product.
  static fetchAmounts() {
    return db.query(
      'SELECT date, inStock, lost, materialName \
      FROM amounts INNER JOIN materials ON amounts.matID = materials.MaterialID \
      WHERE DepID IN (13, 18, 25) AND date = (SELECT MAX(date) FROM amounts)\
      UNION \
      '
    );
  }
}