'use strict';

var _ = require('lodash');
var Feature = require('./feature.model');
var Product = require('../product/product.model');

// Get all features group
exports.group = function(req, res) {
  var async = require("async");
  var featureMaps = [];
  // return res.status(200).json(p);
  console.log(req.params.categoryId);
  Feature.find({categoryId : req.params.categoryId}).distinct('key',function(err,features){
    console.log("features");
  console.log(features);

  var f = {};
    async.each(features, function(k, callback){
      var x = {};
      x.key = k;
      x.v = [];
      // console.log(x);
        Feature.find({key:k,active:true}).distinct('val').exec(function(err,v){
          x.v = v;
          featureMaps.push(x);
          callback();
        });
      },
      // 3rd param is the function to call when everything's done
      function(err){
        if( err ) { return res.status(404).send('Not Found'); } else {
          console.log(featureMaps);
          return res.status(200).json(featureMaps);
        }
      }
    );
});
};

// // Get all features product details
// exports.products = function(req, res) {
//   var async = require("async");
//   var p = [];
//   // return res.status(200).json(p);
//   Feature.find().select({name:1}).exec(function(err,feature){
//     console.log(feature);
//     // Using async library which will enable us to wait until data received from database
//     async.each(feature, function(a, callback){
//         a = a.toObject();
//         Product.find({'features.key':a.name}).select({name:1,_id:1,slug:1}).exec(function(err,c){
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

// Get list of features
exports.index = function(req, res) {
  Feature.find(function (err, features) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(features);
  });
};

// Get features by categoryId
exports.show = function(req, res) {
  console.log("showyby");
  console.log(req.params);
  Feature.find({categoryId : req.params.categoryId}, function (err, feature) {
    if(err) { return handleError(res, err); }
    if(!feature) { return res.status(404).send('Not Found'); }
    return res.json(feature);
  });
};

// Creates a new feature in the DB.
exports.create = function(req, res) {
  Feature.create(req.body, function(err, feature) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(feature);
  });
};

// Updates an existing feature in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Feature.findById(req.params.id, function (err, feature) {
    if (err) { return handleError(res, err); }
    if(!feature) { return res.status(404).send('Not Found'); }
    var updated = _.merge(feature, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(feature);
    });
  });
};

// Deletes a feature from the DB.
exports.destroy = function(req, res) {
  Feature.findById(req.params.id, function (err, feature) {
    if(err) { return handleError(res, err); }
    if(!feature) { return res.status(404).send('Not Found'); }
    feature.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
