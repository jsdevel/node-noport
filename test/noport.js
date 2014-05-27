'use strict';

describe('noport', function(){
  var path = require.resolve('../lib/noport');
  var sut;
  var express = require('express');
  var request = require('request');
  var app;
  var port;

  beforeEach(function(){
    delete require.cache[path];
    sut = require(path);
    app = express();
    app.get('/', function(req, res){
      res.send('hello');
    });
  });

  it('should return a server listening on a random port', function(done){
    sut.for(app);
    sut.get(function(err, server, port){
      request.get('http://localhost:'+port, function(err, response, body){
        body.should.equal('hello');
        done(err);
      });
    });
  });

  it('should return the same server when called multiple times', function(done){
    sut.for(app);
    sut.get(function(err, server, port){
      sut.for(function(req, res){});
      sut.get(function(err, server2, port2){
        port.should.equal(port2);
        server.should.equal(server2);
        done();
      });
    });
  });
});
