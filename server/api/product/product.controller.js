'use strict';

var _ = require('lodash');
var Product = require('./product.model');

function isJson(str) {
  try {
      str = JSON.parse(str);
  } catch (e) {
      str = str;
  }
  return str
}

//push imgaes to product
exports.images = function(req, res) {
    Product.findByIdAndUpdate(
      req.body.pid,
      {$push: { "images": req.body.image } },
      {safe: true, upsert: true, new : true},
      function(err, instance) {
        if (err) {
          return handleError(res, err);
        }

        return res.status(200).json(instance);
      }
    );
};

// Get all features group
exports.count = function(req, res) {
  if(req.query){
    var q = isJson(req.query.where);
    Product.find(q).count().exec(function (err, count) {
      if(err) { return handleError(res, err); }
      return res.status(200).json([{count:count}]);
    });
  }
};

// Get list of products
exports.index = function(req, res) {
  if(req.query){
    var q = isJson(req.query.where);
    var sort = isJson(req.query.sort);
    var select = isJson(req.query.select);
      Product.find(q).limit(req.query.limit).skip(req.query.skip).sort(sort).select(select).exec(function (err, products) {
        if(err) { return handleError(res, err); }
        return res.status(200).json(products);
      });

  }else{
    Product.find(function (err, products) {
      if(err) { return handleError(res, err); }
      return res.status(200).json(products);
    });
  }
};

// Get list of products
exports.products = function(req, res) {

    Product.find({seller: req.user.id}, function (err, products) {
      if(err) { return handleError(res, err); }
      return res.status(200).json(products);
    });
};
// Get a single product
exports.show = function(req, res) {
  Product
    .find({_id: req.params.id})
    .populate('seller', 'name')  // shop todo 只获取 name
    .populate("replies")
    .exec(function (err, product) {
      if (err) {
        return handleError(res, product);
      }
      if (!product) {
        return res.status(404).send('Not Found');
      }
      var newproduct = product[0].toObject();

      return res.json(newproduct);
    });
}

// Creates a new product in the DB.
exports.create = function(req, res) {
  req.body.uid = req.user.email; // id change on every login hence email is used
  req.body.seller = req.user._id;


  req.body.updated = Date.now();
  if(req.body.name)
    req.body.nameLower = req.body.name.toString().toLowerCase();
  if(!req.body.slug && req.body.name)
    req.body.slug = req.body.name.toString().toLowerCase()
                      .replace(/\s+/g, '-')        // Replace spaces with -
                      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
                      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
                      .replace(/^-+/, '')          // Trim - from start of text
                      .replace(/-+$/, '');
  Product.create(req.body, function(err, product) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(product);
  });
};

// Updates an existing product in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  req.body.uid = req.user.email; // id change on every login hence email is used
  req.body.updated = Date.now();
  if(req.body.name)
    req.body.nameLower = req.body.name.toString().toLowerCase();
  if(!req.body.slug && req.body.name)
    req.body.slug = req.body.name.toString().toLowerCase()
                      .replace(/\s+/g, '-')        // Replace spaces with -
                      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
                      .replace(/\-\-+/g, '-')      // Replace multiple - with single -
                      .replace(/^-+/, '')          // Trim - from start of text
                      .replace(/-+$/, '');
  // var obj = JSON.parse(req.body.variants);
  // console.log('EDit', obj);
  Product.findById(req.params.id, function (err, product) {
    if (err) { return handleError(res, err); }
    if(!product) { return res.status(404).send('Not Found'); }
    product.variants = req.body.variants;
    product.features = req.body.features;
    product.keyFeatures = req.body.keyFeatures;
    var updated = _.merge(product, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(product);
    });
  });
};

// Deletes a product from the DB.
exports.destroy = function(req, res) {
  Product.findById(req.params.id, function (err, product) {
    if(err) { return handleError(res, err); }
    if(!product) { return res.status(404).send('Not Found'); }
    product.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
