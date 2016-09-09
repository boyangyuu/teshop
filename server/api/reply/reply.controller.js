'use strict';

var _ = require('lodash');
var Reply = require('./reply.model');
var Product = require('../product/product.model');

// Get all replies group
exports.group = function(req, res) {
  var async = require("async");
  var fe = [];
  // return res.status(200).json(p);
  Reply.find().distinct('key',function(err,reply){
    var f = {};
    async.each(reply, function(k, callback){
          var x = {};
          x.key = k;
          x.v = [];
          // console.log(x);
          Reply.find({key:k,active:true}).distinct('val').exec(function(err,v){
            x.v = v;
            fe.push(x);
            callback();
          });
        },
        // 3rd param is the function to call when everything's done
        function(err){
          if( err ) { return res.status(404).send('Not Found'); } else { return res.status(200).json(fe); }
        }
    );
  });
};

// // Get all replies product details
// exports.products = function(req, res) {
//   var async = require("async");
//   var p = [];
//   // return res.status(200).json(p);
//   Reply.find().select({name:1}).exec(function(err,reply){
//     console.log(reply);
//     // Using async library which will enable us to wait until data received from database
//     async.each(reply, function(a, callback){
//         a = a.toObject();
//         Product.find({'replies.key':a.name}).select({name:1,_id:1,slug:1}).exec(function(err,c){
//           a.sub_features = c;
//           p.push(a);
//           callback();
//         });
//       },
//       // 3rd param is the function to call when everything's done
//       function(err){
//         if( err ) { return res.status(404).send('Not Found'); } else { return res.status(200).json(p); }
//       }
//     );
// });
// };

// Get count
exports.count = function(req, res) {
    if(req.query){
        var q = isJson(req.query.where);
        Reply.find(q).count().exec(function (err, count) {
            if(err) { return handleError(res, err); }
            return res.status(200).json({count:count});
        });
    }
};

function isJson(str) {
    try {
        str = JSON.parse(str);
    } catch (e) {
        str = str;
    }
    return str
}

// Get list of replies
exports.index = function(req, res) {
    if(req.query){
        // console.log(req.query,req.query.skip,req.query.limit,req.query.sort);
        var q = isJson(req.query.where);
        // console.log(q);
        var sort = isJson(req.query.sort);
        var select = isJson(req.query.select);
        Reply.find(q).limit(req.query.limit).skip(req.query.skip).sort(sort).select(select).exec(function (err, replies) {
            if(err) { return handleError(res, err); }
            return res.status(200).json(replies);
        });

    }else{
        Reply.find(function (err, replies) {
            if(err) { return handleError(res, err); }
            return res.status(200).json(replies);
        });
    }
};

// Get a single reply
exports.show = function(req, res) {
  Reply.findById(req.params.id, function (err, reply) {
    if(err) { return handleError(res, err); }
    if(!reply) { return res.status(404).send('Not Found'); }
    return res.json(reply);
  });
};

// Creates a new reply in the DB.
exports.create = function(req, res) {
  req.body.userName = req.user.name;
  req.body.updated = Date.now();
  Reply.create(req.body, function(err, reply) {
      //update product
      if(err) { return handleError(res, err); }

      console.log(req.body);
      Product.findByIdAndUpdate(
          req.body.productId,
          {$push: { "replies": reply._id}},
          {safe: true, upsert: true, new : true},
          function(err, instance) {
              console.log(err);
              if (err) {
                  return res.status(201).json("添加到的时发生错误");
              }
              return res.json(reply);
          }
      );
  });
};

// Updates an existing reply in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Reply.findById(req.params.id, function (err, reply) {
    if (err) { return handleError(res, err); }
    if(!reply) { return res.status(404).send('Not Found'); }
    var updated = _.merge(reply, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(reply);
    });
  });
};

// Deletes a reply from the DB.
exports.destroy = function(req, res) {
  Reply.findById(req.params.id, function (err, reply) {
    if(err) { return handleError(res, err); }
    if(!reply) { return res.status(404).send('Not Found'); }
    reply.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
