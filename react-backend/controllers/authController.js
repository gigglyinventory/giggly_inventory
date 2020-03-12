const User = require('../models/user');

const bcrypt = require('bcryptjs');
import loginGate from '../../giggly-ui/src/login-gate';
import userSession from '../../giggly-ui/src/userSession';
import Login from '../../giggly-ui/src/Components/Login';
var isLogged;

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
};

// exports.getSignup = (req,res,next) => {
//     res.render('auth/signup', {
//         path: '/signup',
//         pageTitle: 'Signup',
//         isAuthenticated: false
//     });
// };

exports.postLogin = (req, res, next) => {
  const username = req.body.username;
  const loginPassword = req.body.password;
    User.findById(username) // database query
      .then(dbPassword => {
        if (!dbPassword){
          console.log('not dbPaswword')
          return res.redirect('/login');
        }
        bcrypt
        .compare(loginPassword, dbPassword[0].password)
        .then(doMatch => {
          console.log('loginPassword',loginPassword)
          console.log('dbpassword', dbPassword[0].password)
          console.log(doMatch)
          if (doMatch){
            console.log('they do match')
            req.session.isLoggedIn = true;
            userSession.setSession = true;
            userSession.setUsername = username;
            res.render('/');
            sessionStorage.setItem('isLoggedIn', 'true');
            req.session.user = username;
            return req.session.save(err => {
              //console.log(err);
              res.redirect('/');
            });          
          }
          res.redirect('/');
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
