var express = require('express');
var controller = require('./data.controller.js')();
var router = express.Router();

router.post('/', controller.add);
router.get('/', controller.take);
router.get('/:code', controller.takeOne);


module.exports = router;