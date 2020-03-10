const Product = require('../models/product')
const Material = require('../models/material')

exports.getInventory = (req, res, next) => {
  Product.fetchReadyShip()
    .then(products => {
      Material.fetchPreProduction()
        .then(materials => {
          res.json({products, materials})
        })
    })
    .catch(err => console.log(err));
}

exports.getProductionStepMaterials = (req, res, next) => {
  Product.fetchProductionStep()
    .then(materials => {
      res.json(materials)
    })
    .catch(err => console.log(err));
}