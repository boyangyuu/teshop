var muilter = require('./multerUtil');
var express = require('express');
var controller = require('./image.controller');
var path = require("path");
var auth = require('../../auth/auth.service');


var router = express.Router();

router.post('/image/uploading',function (req, res) {
  //multer有single()中的名称必须是表单上传字段的name名称。
  var upload=muilter.single('image'); 
  upload(req, res, function (err) {
    if (err) {
      return console.log(err)
    }
    return res.status(200).json('ok');
    // console.log(req);
  })
})



module.exports = router;