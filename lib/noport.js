'use strict';

var http = require('http');
var deferred = require('q').defer();
var promise = deferred.promise;
var err = null;
var server = null;
var port = null;

module.exports = {
  for: function(app){
    if(!server){
      server = http.createServer(app);
      server.listen(0, function(err){
        deferred.resolve([
          err, 
          server, 
          server.address().port
        ]);
      });
    }
  },
  get: function(cb){
    promise.then(function(args){
      cb.apply(null, args);
    });
  }
};
