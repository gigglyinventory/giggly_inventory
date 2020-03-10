var express = require('express');
var router = express.Router();

const isAuth = require('../middleware/is-auth');

/* GET home page. */
router.get('/', /* isAuth, */ function(req, res, next) { // add isAuth after login page is moved?
  res.render('index', { title: 'Express' });
});

module.exports = router;
