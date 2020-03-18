const Material = require('../models/material');
const Product = require('../models/product');

exports.postUpdateGrills = (req, res, next) => {
  const date = req.body.date
  // console.log("#################################################################################### \
  //   ##############################################################################################")
  // console.log(date)
  const design = req.body.design
  const color = req.body.color
  const belovac = req.body.belovac
  const belovacLost = req.body.belovacLost
  const guillotine = req.body.guillotine
  const guillotineLost = req.body.guillotineLost
  const rotozip = req.body.rotozip
  const rotozipLost = req.body.rotozipLost
  const sanding = req.body.sanding
  const sandingLost = req.body.sandingLost
  const velcro = req.body.velcro
  const velcroLost = req.body.velcroLost
  const stickers = req.body.stickers
  const stickersLost = req.body.stickersLost
  const packaging = req.body.packaging
  const packagingLost = req.body.packagingLost

  Product.updateGrills(date, design, color, "GrillBelovac", "GrillGuillotine", belovac, belovacLost)
    .then(Product.updateGrills(date, design, color, "GrillGuillotine", "GrillRotozip", guillotine, guillotineLost)
    .then(Product.updateGrills(date, design, color, "GrillRotozip", "GrillSanding", rotozip, rotozipLost)
    .then(Product.updateGrills(date, design, color, "GrillSanding", "GrillVelcro", sanding, sandingLost)
    .then(Product.updateGrills(date, design, color, "GrillVelcro", "GrillStickers", velcro, velcroLost)
    .then(Product.updateGrills(date, design, color, "GrillStickers", "GrillPackaging", stickers, stickersLost)
    .then(Product.updateGrills(date, design, color, "GrillPackaging", "GrillReadyShip", packaging, packagingLost)
    ))))))
   .catch(err => console.log(err))
    
};

exports.postUpdateFeet = (req, res, next) => {
  const date = req.body.date
  // console.log("#################################################################################### \
  //   ##############################################################################################")
  // console.log(date)
  const color = req.body.color
  const trim = req.body.trim
  const trimLost = req.body.trimLost
  const assembly = req.body.assembly
  const assemblyLost = req.body.assemblyLost
  const packaging = req.body.packaging
  const packagingLost = req.body.packagingLost
  Product.updateFeet(date, color, "FeetKnobRemoval", "FeetScrewCoreAssembly", trim, trimLost)
    .then(Product.updateFeet(date, color, "FeetScrewCoreAssembly", "FeetPackaging", assembly, assemblyLost)
    .then(Product.updateFeet(date, color, "FeetPackaging", "FeetReadyShip", packaging, packagingLost)
    ))
    .catch(err => console.log(err))
    
};

exports.postUpdateSkins = (req, res, next) => {
  const date = req.body.date
  // console.log("#################################################################################### \
  //   ##############################################################################################")
  // console.log(date)
  const skin = req.body.skin
  const walker = req.body.walker
  const print = req.body.print
  const printLost = req.body.printLost
  const assembly = req.body.assembly
  const assemblyLost = req.body.assemblyLost
  const packaging = req.body.packaging
  const packagingLost = req.body.packagingLost
  Product.updateSkins(date, skin, walker, "SkinWrapPrint", "SkinWrapAssembly", print, printLost)
    .then(Product.updateSkins(date, skin, walker, "SkinWrapAssembly", "SkinPackaging", assembly, assemblyLost)
    .then(Product.updateSkins(date, skin, walker, "SkinPackaging", "SkinReadyShip", packaging, packagingLost)
    ))
    .catch(err => console.log(err))
    
};

exports.postUpdateMaterials = (req, res, next) => {
  const date = req.body.date
  const location = req.body.location
  const name = req.body.name
  const gain = req.body.delivered
  const loss = req.body.scrap
  Material
    .update(date, location, name, gain, loss)
    .catch(err => console.log(err))
    
};

exports.postRollbackAll = (req, res, next) => {
  Product
    .rollbackAll()
    .catch(err => console.log(err))
    
};
