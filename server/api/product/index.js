'use strict';

var express = require('express');
var controller = require('./product.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/user', auth.isAuthenticated(), controller.products);

router.get('/count', controller.count);
router.get('/:id', controller.show);
router.post('/', auth.hasRole('shop'), controller.create);
router.put('/:id', auth.hasRole('shop'), controller.update);
router.patch('/:id', auth.hasRole('shop'), controller.update);
router.delete('/:id', auth.hasRole('shop'), controller.destroy);

module.exports = router;
