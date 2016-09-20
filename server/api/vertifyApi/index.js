var express = require('express');
var controller = require('./vertify.controller');
var path = require("path");
var auth = require('../../auth/auth.service');
var fs = require("fs");
var ccap = require('ccap');
// var mdPath = 'upload';

var myPath = path.normalize(__dirname+'/../../../upload')


var router = express.Router();

router.get('/ccap',function(req, res){

    var captcha = ccap({

    width:200,//set width,default is 256

    height:60,//set height,default is 60

    offset:40,//set text spacing,default is 40

    quality:100,//set pic quality,default is 50

    fontsize:57,//set font size,default is 57

    generate:function(){//Custom the function to generate captcha text
         //generate captcha text here
         return req.query.code;
      }

    });
    var ary = captcha.get();

    var txt = ary[0];

    var buf = ary[1];

    res.end(buf);

})



module.exports = router;
