const db = require('../util/database');

module.exports = class Material {
  constructor(name) {
    this.name = name
  }

  save() {
    return db.query('INSERT INTO materials (MaterialName) VALUES (?)', [this.name]);
  }

  // Inserts a new record. Overwrites any previous record with the same date, depID, and matID.
  static update(date, location, name, gain, lost) {
    const depID = 13
    if (name === "RedPaw" || name === "BluePay" || name === "BlackPaw" ||
      name === "RedPawUPC" || name === "BluePayUPC" || name === "BlackPawUPC" ||
      name === "Core" || name === "Screw" || name === "ShippingEnvelope" ||
      name === "Blister" || name === "BlisterCard")
      depID = 25
    else if (name === "RedPlasticSheet" || name === "BluePlasticSheet" || name === "BlackPlasticSheet" ||
      name === "RedTruckUPC" || name === "BlueTruckUPC" || name === "BlackTruckUPC" ||
      name === "RedNoteboardUPC" || name === "BlueNoteboardUPC" || name === "BlackNoteboardUPC" ||
      name === "Grommet" || name === "Velcro" || name === "TruckStickerSet" ||
      name === "GrillBox" || name === "NoteboardSticker")
      depID = 18
    else if (location === "Main")
      depID = 29
    return db.query( 
      'INSERT INTO amounts (Date, DepID, MatID, InStock, Lost) \
      SELECT * FROM ( \
        SELECT DISTINCT ? AS Date, ? AS Department, MaterialID, ? AS InStock, ? AS Lost \
        FROM departments INNER JOIN amounts ON DepartmentID = DepID \
          INNER JOIN materials ON MaterialID = MatID \
        WHERE MaterialName LIKE ? \
      ) AS temp \
      ON DUPLICATE KEY UPDATE InStock = temp.InStock, Lost = temp.Lost',
    [date, depID, gain, lost, name])
  }

  // Returns the amount of materials in pre-production 
  static fetchPreProduction(){
    return db.query( // Pre-production departmentID's are 13, 18, and 25.
    'SELECT InStock, MaterialName \
    FROM amounts INNER JOIN materials ON amounts.MatID = materials.MaterialID \
    WHERE DepID IN (13, 18, 25) AND Date = (SELECT Date(CURRENT_TIMESTAMP() - INTERVAL 8 HOUR)) \
    ORDER BY MaterialName')
  }

  static fetchAll() {
    return db.query('SELECT * FROM materials');
  }
}