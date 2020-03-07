const Material = require('../models/material');
const Product = require('../models/product');

exports.postUpdateGrills = (req, res, next) => {
  const date = req.body.date
  const design = req.body.design
  const color = req.body.color
  const department = req.body.department
  const completed = req.body.completed
  const lost = req.body.lost
  Product
    .update(name, department, gain, loss)
    .catch(err => console.log(err))
    res.redirect('/')
};

exports.postUpdateFeet = (req, res, next) => {
  const name = req.body.productName
  const department = req.body.department
  const gain = req.body.gain
  const loss = req.body.loss
  Product
    .update(name, department, gain, loss)
    .catch(err => console.log(err))
    res.redirect('/')
};

exports.postUpdateSkins = (req, res, next) => {
  const name = req.body.productName
  const department = req.body.department
  const gain = req.body.gain
  const loss = req.body.loss
  Product
    .update(name, department, gain, loss)
    .catch(err => console.log(err))
    res.redirect('/')
};

exports.postUpdateMaterials = (req, res, next) => {
  const date = req.body.date
  const name = req.body.name
  const gain = req.body.delivered
  const loss = req.body.scrap
  const department = req.body.department
  Material
    .update(date, name, gain, loss, department)
    .catch(err => console.log(err))
    res.redirect('/')
};