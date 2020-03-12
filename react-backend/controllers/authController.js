const User = require('../models/user');

const bcrypt = require('bcryptjs');

exports.getLogin = (req, res, next) => {
  console.log('in get login')
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
};

exports.getSignup = (req,res,next) => {
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
  const username = req.body.username;
  const loginPassword = req.body.password;
  console.log('post log session', req.session)
    User.findById(username) // database query
      .then(dbPassword => {
        if (!dbPassword){
          console.log('no dbPaswword')
          return res.redirect('/login');
        }
        bcrypt.compare(loginPassword, dbPassword[0].password)
        .then(doMatch => {
          console.log('loginPassword',loginPassword)
          console.log('dbpassword', dbPassword[0].password)
          console.log(doMatch)
          if (doMatch){
            console.log('they do match')
            req.session.loggedIn = true;
            console.log(req.session.loggedIn)
            //req.session.user = username;
            req.session.save();
            req.url = '/App'
            return res.redirect('localhost:3000/App');          
          }
         return res.redirect('/Login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/');
        })
        
      })
      .catch(err => console.log(err));
  };
  
  exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({ email: email })
      .then(userDoc => {
        if (userDoc) {
          return res.redirect('/signup');
        }
        return bcrypt.hash(password, 12);
        
      })
      .then(hashedPassword => {
        const user = new User({
          email: email,
          password: hashedPassword,
        });
        return user.save();
      })
      .then(result => {
        res.redirect('/login');
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
      console.log(err);
      res.redirect('/');
    });
  };
