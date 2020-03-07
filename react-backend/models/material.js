const db = require('../util/database');

module.exports = class Material {
  constructor(name) {
    this.name = name
  }

  save() {
    return db.query('INSERT INTO materials (MaterialName) VALUES (?)', [this.name]);
  }

  // Inserts a new record. Overwrites any previous record with the same date, depID and matID.
  static update(date, name, gain, loss, department) {
    return db.query('INSERT INTO amounts (Date, DepID, MatID, InStock, Lost) VALUES (?, ?, ?, ?, ?)\
      ON DUPLICATE KEY UPDATE InStock = ?, Lost = ?',
    [date, department, name, gain, loss, gain, loss])
  }

  // Returns the amount of materials in pre-production 
  static fetchPreProduction(){
    return db.query(
    'SELECT inStock, materialName \
    FROM amounts X INNER JOIN materials ON X.matID = materials.MaterialID \
    WHERE DepID IN (13, 18, 25) AND date = \
      (SELECT MAX(date) FROM amounts WHERE matID = X.matID)')
  }

  static fetchAll() {
    return db.query('SELECT * FROM materials');
  }

  static findByName(name) {
      return db.query('SELECT * FROM materials WHERE materialName like %?%', [name])
  }
}