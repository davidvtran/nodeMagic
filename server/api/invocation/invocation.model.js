'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InvocationSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
},
{Collection:'invocation'});

module.exports = mongoose.model('Invocation', InvocationSchema);