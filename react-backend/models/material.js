const db = require('../util/database');

module.exports = class Material {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  save() {
    return db.query(
      'INSERT INTO materials (MaterialID, MaterialNam) VALUES (?, ?)',
      [this.id, this.name]
    );
  }

  static update() {
    return db.query('') //this is a complex query that will be implemented
  }

  static fetchAll() {
    return db.query('SELECT * FROM materials');
  }

  static findById(id) {
    return db.query('SELECT * FROM materials WHERE materialID = ?', [id]);
  }

  static findIDByName(name) {
      return db.query('SELECT productID FROM materials WHERE materialName like %?%', [name])
  }
}