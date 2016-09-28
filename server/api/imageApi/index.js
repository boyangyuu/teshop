var express = require('express');
var controller = require('./image.controller');
var path = require("path");
var auth = require('../../auth/auth.service');
var router = express.Router();

router.post('/image/uploading', controller.index);

module.exports = router;
