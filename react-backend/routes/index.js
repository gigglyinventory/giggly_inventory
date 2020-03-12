var express = require('express');
var router = express.Router();

const isAuth = require('../middleware/is-auth');

/* GET home page. */
router.get('/App', /* isAuth, */ function(req, res, next) { // add isAuth after login page is moved?
  console.log('in index router')
  return res.redirect('./App');
});

module.exports = router;
