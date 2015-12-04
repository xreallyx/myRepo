var express = require('express');
var controller = require('./data.controller.js')();
var router = express.Router();

router.post('/', controller.add);


module.exports = router;