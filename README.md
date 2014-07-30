# noport [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url]
> An http server that listens on a random port.  Useful for testing.

## Why ?
Often times we need to run tests against our applications that spin up http servers.
This is easy enough locally when the used ports are known, but what about environments
where multiple servers may be running?

This module allows one to gain access to an http server that will always have a
non conflicting port provisioned.

## Usage

First you need to call `for()` with your application.  An application is nothing
other than a function.  At any time you can call `get()` to gain access to the
newly created server.

````javascript
var noport = require('noport');
var app = function(req, res){};

noport.for(app);

noport.get(function(err, server, port){
  server.address().port === port;
});

noport.reset();//calls .close() on the current server
````

##LICENSE
``````
The MIT License (MIT)

Copyright (c) 2014 Joseph  Spencer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
``````

[downloads-image]: http://img.shields.io/npm/dm/noport.svg
[npm-url]: https://npmjs.org/package/noport
[npm-image]: http://img.shields.io/npm/v/noport.svg

[travis-url]: https://travis-ci.org/jsdevel/node-noport
[travis-image]: http://img.shields.io/travis/jsdevel/node-noport.svg
