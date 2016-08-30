'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  orderNo: String,
  name: String,
  slug: String,
  info: String,
  uid: String,
  email: String,
  address: String,
  city: String,
  state: String,
  zip: String,
  country: String,
  phone: String,
  payment: String,
  shipping: Object,
  active: { type: Boolean, default: true },
  updated: {type: Date},
  orderDate: {type: Date, default: Date.now},
  status: Object({ name: String, val: Number}),
  items: [{ sku: String, name: String, size: String, quantity: String, mrp: String, price: String, image: String, category: String }]
});

module.exports = mongoose.model('Order', OrderSchema);
