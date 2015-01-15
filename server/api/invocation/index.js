'use strict';

var express = require('express');
var controller = require('./invocation.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:threedigitcode', controller.get3digitcode);
router.post('/', controller.create);
router.post('/invocation', controller.invocation)
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;