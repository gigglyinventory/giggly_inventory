const Inventory = require('../models/inventory')

exports.getInventory = (req, res, next) => {
  Inventory.fetchAmounts()
    .then(inventory => {
      res.json(inventory)
    })
    .catch(err => console.log(err));
}