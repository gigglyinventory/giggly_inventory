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
    'SELECT InStock, MaterialName \
    FROM amounts INNER JOIN materials ON amounts.MatID = materials.MaterialID \
    WHERE DepID IN (13, 18, 25) AND Date = CURDATE() \
    ORDER BY materialName')
  }

  static fetchAll() {
    return db.query('SELECT * FROM materials');
  }

  static findByName(name) {
      return db.query('SELECT * FROM materials WHERE MaterialName like "%?%"', [name])
  }
}