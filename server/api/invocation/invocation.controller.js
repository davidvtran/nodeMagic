'use strict';

var _ = require('lodash');
var Invocation = require('./invocation.model');

// Get list of invocations
exports.index = function(req, res) {
  Invocation.find(function (err, invocations) {
    if(err) { return handleError(res, err); }
    return res.json(200, invocations);
  });
};

// Get a single invocation
exports.show = function(req, res) {
  Invocation.findById(req.params.id, function (err, invocation) {
    if(err) { return handleError(res, err); }
    if(!invocation) { return res.send(404); }
    return res.json(invocation);
  });
};

exports.get3digitcode = function(req,res) {
  console.log(req.params.threedigitcode)
  Invocation
    .find({'shortURL': 'https://org62.my.salesforce.com/' + req.params.threedigitcode})
    .exec(function(err,data) {
      return res.json(data);
    });
}

exports.invocation = function(req,res) {
  console.log(req.body.shortURL);
  var options = {
    "limit": 5,
  };
  console.log(options);
  Invocation
    .find({'shortURL': req.body.shortURL}, options)
    .exec(function(err,data) {
      return res.json(data);
    });
  //console.log(req)
  //console.log(res)

};

// Creates a new invocation in the DB.
exports.create = function(req, res) {
  Invocation.create(req.body, function(err, invocation) {
    if(err) { return handleError(res, err); }
    return res.json(201, invocation);
  });
};

// Updates an existing invocation in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Invocation.findById(req.params.id, function (err, invocation) {
    if (err) { return handleError(res, err); }
    if(!invocation) { return res.send(404); }
    var updated = _.merge(invocation, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, invocation);
    });
  });
};

// Deletes a invocation from the DB.
exports.destroy = function(req, res) {
  Invocation.findById(req.params.id, function (err, invocation) {
    if(err) { return handleError(res, err); }
    if(!invocation) { return res.send(404); }
    invocation.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}