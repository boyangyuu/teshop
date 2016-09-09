'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReplySchema = new Schema({
    comment: String,
    productId: { type: Schema.Types.ObjectId, ref: 'Product'},
    updated: {type: Date, default: Date.now},
    userName: {type: String, default: "undefined"},
    // userid:
});

module.exports = mongoose.model('Reply', ReplySchema);

