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
  console.log('############### in controllers fetchProductionStep ##################', req.body.ProductName, req.method, req.body)
  const ProductName = req.body.ProductName;
  const ProductColor = req.body.ProductColor
  const ProductDepartment = req.body.ProductDepartment
  Product.fetchProductionStep(ProductName, ProductColor, ProductDepartment)
  .then(productions => {
    console.log('The response is ', productions)
    res.json({productions})
  })
    .catch(err => console.log(err))
   // res.redirect('/production')
};

exports.updateReadyShip = (req, res, next) => {
  console.log('####################### in updateReadyShip #')
  const date = req.body.date 
  const name = req.body.name
  const amount = req.body.quantity
  console.log(date, name, amount)
  if(name === "RedTruck"){ // ReadyShip departmentID for Grills is 35
    Product.updateGrills(date, "Truck", "Red", 35, 39, amount, 0)
      .catch(err => console.log(err))
      res.redirect('/Sales')
  } else{
    res.redirect('/Sales')
  }
}