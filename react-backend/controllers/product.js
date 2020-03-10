
const Product = require('../models/product')

exports.fetchProductionStep = (req, res, next) => {
    console.log('############### in controllers fetchProductionStep ##################', req.body)
    const ProductName = req.body.ProductName;
    const ProductColor = req.body.ProductColor
    const ProductDepartment = req.body.ProductDepartment
    response = Product.fetchProductionStep(ProductName, ProductColor, ProductDepartment)
    res.send(response)
      .catch(err => console.log(err))
      res.redirect('/production')
  };