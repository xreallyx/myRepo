var express = require('express');
var controller = require('./data.controller.js')();
var router = express.Router();

router.post('/', controller.save);
router.get('/', controller.take);
router.get('/:code', controller.takeOne);
router.delete('/:code',controller.remove);



module.exports = router;