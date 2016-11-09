'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StoreSchema = new Schema({
  name: String,
  // product_score: Number,
  // serve_score: Number,
  // speed_score: Number,
  // store_score: Number,
  active: { type: Boolean, default: true },
  seller: { type: Schema.Types.ObjectId, ref: 'User'},
  buildDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Store', StoreSchema);
