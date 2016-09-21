var muilter = require('./multerUtil');
var express = require('express');
var controller = require('./image.controller');
var path = require("path");
var auth = require('../../auth/auth.service');
var multipart = require('connect-multiparty');
var upload_tmp = path.normalize(__dirname+'/../../../upload_tmp')
var multipartMiddleware = multipart({uploadDir: upload_tmp});
var fs = require("fs");
var muilter = require('./multerUtil');

// var mdPath = 'upload';

var myPath = path.normalize(__dirname+'/../../../upload')


var router = express.Router();

router.post('/image/uploading',function (req, res) {


  var upload=muilter.any();
  // console.log(req);
  // console.log(req.headers);

  upload(req, res, function (err, file) {
    if (err) {
      return console.log(err)
    }
    console.log();
    // console.log(req.body);
    return res.status(200).json(req.files[0].filename);
    // console.log(req);
  })




})



module.exports = router;
