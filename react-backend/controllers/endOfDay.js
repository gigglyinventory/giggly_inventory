const Material = require('../models/material');
const Product = require('../models/product');

exports.postUpdateGrills = (req, res, next) => {
  const date = req.body.date
  console.log(date)
  const design = req.body.design
  const color = req.body.color
  const belovacCompleted = req.body.belovacCompleted
  const belovacLost = req.body.belovacLost
  const guillotineCompleted = req.body.guillotineCompleted
  const guillotineLost = req.body.guillotineLost
  const RotozipCompleted = req.body.RotozipCompleted
  const RotozipLost = req.body.RotozipLost
  const SandingCompleted = req.body.SandingCompleted
  const SandingLost = req.body.SandingLost
  const VelcroCompleted = req.body.VelcroCompleted
  const VelcroLost = req.body.VelcroLost
  const StickersCompleted = req.body.StickersCompleted
  const StickersLost = req.body.StickersLost
  const PackagingCompleted = req.body.PackagingCompleted
  const PackagingLost = req.body.PackagingLost

  Product.updateGrills(date, design, color, "GrillBelovac", "GrillGuillotine", belovacCompleted, belovacLost)
    .then(Product.updateGrills(date, design, color, "GrillGuillotine", "GrillRotozip", guillotineCompleted, guillotineLost)
    .then(Product.updateGrills(date, design, color, "GrillRotozip", "GrillSanding", RotozipCompleted, RotozipLost)
    .then(Product.updateGrills(date, design, color, "GrillSanding", "GrillVelcro", SandingCompleted, SandingLost)
    .then(Product.updateGrills(date, design, color, "GrillVelcro", "GrillStickers", VelcroCompleted, VelcroLost)
    .then(Product.updateGrills(date, design, color, "GrillStickers", "GrillPackaging", StickersCompleted, StickersLost)
    .then(Product.updateGrills(date, design, color, "GrillPackaging", "GrillReadyShip", PackagingCompleted, PackagingLost)
    ))))))
    .catch(err => console.log(err))
    res.redirect('/endOfDay')
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