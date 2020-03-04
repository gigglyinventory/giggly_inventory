const db = require('../util/database');

module.exports = class Product {
  constructor(id, name, discontinued) {
    this.id = id;
    this.name = name;
    this.discontinued = discontinued;
  }

  // functions that we know we need to use. Will often contain SQL queries
  // since we're interacting with a database
  save() {
    return db.query(
      'INSERT INTO products (ProductID, ProductName, Discontinued) VALUES (?, ?, ?)',
      [this.id, this.name, this.discontinued]
    );
  }

  static update() {
    return db.query('') //this is a complex query that will be implemented
  }

  static fetchAll() {
    return db.query('SELECT * FROM products');
  }

  static findById(id) {
    return db.query('SELECT * FROM products WHERE productID = ?', [id]);
  }

  static findIDByName(name) {
      return db.query('SELECT productID FROM products WHERE productName like %?%', [name])
  }

  static discontinueByID(id) {
      return db.query('UPDATE products SET Discontinued = 1 WHERE productID = ?', [id])
  }
};