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

exports.getProducts = (req, res, next) => {
  Product.fetchReadyShip()
    .then(inventory => {
      res.json(inventory)
    })
    .catch(err => console.log(err));
}

exports.getMaterials = (req, res, next) => {
  Material.fetchPreProduction()
    .then(inventory => {
      res.json(inventory)
    })
    .catch(err => console.log(err));
}