// similar to the classes we all know and love

// connection to the database
const db = require('../util/database');

// constructor
module.exports = class User {
  constructor(id, password, fname, lname, email, lastLogon) {
    this.id = id;
    this.password = password;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.lastLogon = lastLogon;
  } 

  // functions that we know we need to use. Will often contain SQL queries
  // since we're interacting with a database
  save() {
    return db.query('INSERT INTO users VALUES (?, ?, "salt", ?, ?, ?, ?)',
      [this.id, this.password, this.fname, this.lname, this.email, this.lastLogon]
    )
  }

  static deleteByID(id) {
      return db.query('DELETE FROM users WHERE userID = ?', [id])
  }

  static fetchAll() {
    return db.query('SELECT * FROM users');
  }

  static findById(id) {
    return db.query('SELECT * FROM users WHERE userID = ?', [id]);
  }
};
