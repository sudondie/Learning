let express = require('express');
let bodyParser = require('body-parser');
let user = require('../models/user');
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;