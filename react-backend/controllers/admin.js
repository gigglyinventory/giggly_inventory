// controller calls a model, then processes the logic 

// the models called
const User = require('../models/user')
const Product = require('../models/product')
const Material = require('../models/material')
const bcrypt = require('bcryptjs')

//functions that we want the website to be able to do
exports.getUsers = (req, res, next) => {
  User.fetchAll()
    .then(users => {
      res.json(users).redirect('/')
    })
    .catch(err => console.log(err));
};

async function postAddUser(req, res, next){
  const username = req.body.username;
  const password = req.body.password;
  const fName = req.body.userFirstName;
  const lName = req.body.userLastName;
  const email = req.body.email;
  const hashedPassword = await bcrypt.hash(password, 12)
  const user = new User(username, hashedPassword, fName, lName, email, null);
  user.save()
    .catch(err => console.log(err))
    res.redirect('/')
};

exports.postAddProduct = (req, res, next) => {
  const name = req.body.ProductName;
  const discontinued = req.body.discontinued;
  const product = new Product(name, discontinued);
  product.save()
    .catch(err => console.log(err));
    res.redirect('/')
};

exports.postAddMaterial = (req, res, next) => {
  const name = req.body.MaterialName;
  const material = new Material(name);
  material.save()
    .catch(err => console.log(err));
    res.redirect('/')
};

exports.postDeleteUser = (req, res, next) => {
  const username = req.body.username
  User.deleteByID(username)
    .catch(err => console.log(err))
    res.redirect('/')
};

exports.postDiscontinueProduct = (req, res, next) => {
  const ProductName = req.body.ProductID;
  Product.discontinue(ProductName)
    .catch(err => console.log(err))
    res.redirect('/')
};

module.exports.postAddUser = postAddUser