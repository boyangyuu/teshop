'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FeatureSchema = new Schema({
  key: String,
  val: String,
  info: String,
  active: Boolean,
  categoryId:Schema.Types.ObjectId,
});

module.exports = mongoose.model('Feature', FeatureSchema);
