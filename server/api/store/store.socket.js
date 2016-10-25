/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Store = require('./store.model');

exports.register = function(socket) {
  Store.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Store.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('Store:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('Store:remove', doc);
}