// controller calls a model, then processes the logic 

// the model called
const User = require('../models/user');

//functions that we want the website to be able to do
exports.getAddUser = (req, res, next) => {
  User.fetchAll(users => {
    res.render('admin', {
      prods: users,
      pageTitle: 'Admin',
      path: '/admin'
    });
  });
};

exports.postAddUser = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const fName = req.body.fName;
  const lName = req.body.lName;
  const email = req.body.email;
  const user = new User(username, password, fName, lName, email, null);
  user
    .save()
    .then(() => {
      res.redirect('/admin');
    })
    .catch(err => console.log(err));
};

exports.postDeleteUser = (req, res, next) => {
  const username = req.body.username;
  User.deleteById(username);
  res.redirect('/admin');
};
