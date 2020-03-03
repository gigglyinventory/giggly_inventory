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
    return db.execute(
      'INSERT INTO products (ProductID, ProductName, Discontinued) VALUES (?, ?, ?)',
      [this.id, this.name, this.discontinued]
    );
  }

  static update()

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE productID = ?', [id]);
  }
};
