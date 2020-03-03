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
    return db.execute(
      'INSERT INTO users (UserID, Password, UserFirstName, UserLastName, UserEmail, LastLogonDate) VALUES (?, ?, ?, ?, ?, ?)',
      [this.id, this.password, this.fname, this.lname, this.email, this.lastLogon]
    );
  }

  static deleteById(id) {
      return db.execute('DELETE FROM users WHERE userID = ?', [id])
  }

  static fetchAll() {
    return db.execute('SELECT * FROM users');
  }

  static findById(id) {
    return db.execute('SELECT * FROM users WHERE userID = ?', [id]);
  }
};
