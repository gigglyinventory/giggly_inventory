const Material = require('../models/material');
const Product = require('../models/product');

exports.postUpdateProduct = (req, res, next) => {
  const name = req.body.productName;
  Product
    .update(name)
    .catch(err => console.log(err));
    res.redirect('/');
};

exports.postUpdateMaterial = (req, res, next) => {
  const date = req.body.date
  const name = req.body.name
  const gain = req.body.delivered
  const loss = req.body.scrap
  const department = req.body.department
  Material
    .update(date, name, gain, loss, department)
    .catch(err => console.log(err));
    res.redirect('/');
};