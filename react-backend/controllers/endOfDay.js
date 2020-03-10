const Material = require('../models/material');
const Product = require('../models/product');

exports.postUpdateGrills = (req, res, next) => {
  const date = req.body.year + "-" + req.body.month + "-" + req.body.day
  console.log(date)
  const design = req.body.design
  const color = req.body.color
  const belovacCompleted = req.body.belovac
  const belovacLost = req.body.belovacLost
  const guillotineCompleted = req.body.guillotine
  const guillotineLost = req.body.guillotineLost
  const RotozipCompleted = req.body.rotozip
  const RotozipLost = req.body.rotozipLost
  const SandingCompleted = req.body.sanding
  const SandingLost = req.body.sandingLost
  const VelcroCompleted = req.body.velcro
  const VelcroLost = req.body.velcroLost
  const StickersCompleted = req.body.stickers
  const StickersLost = req.body.stickersLost
  const PackagingCompleted = req.body.packaging
  const PackagingLost = req.body.packagingLost

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
    res.redirect('/endOfDay')
};

exports.postUpdateSkins = (req, res, next) => {
  const name = req.body.productName
  const department = req.body.department
  const gain = req.body.gain
  const loss = req.body.loss
  Product
    .update(name, department, gain, loss)
    .catch(err => console.log(err))
    res.redirect('/endOfDay')
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
    res.redirect('/endOfDay')
};