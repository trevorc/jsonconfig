jsonconfig - Simple JSON config for node.js applications
========================================================

# jsonconfig

## Installation:

    $ npm install jsonconfig

Or just copy jsonconfig.js somewhere that your application can find it.


## Usage:

  jsonconfig loads JSON configuration files into a singleton exposed via
  the module itself.

  Once the configuration has been loaded, simply access configuration 

  Example:

    var http = require('http')
      , config = require('jsonconfig');

    var server = http.createServer(function(request, response) {
      if (config.VERBOSE) {
        console.log([new Date().toUTCString(), request.method, request.path].join('\t'));
      }
      response.writeHead(200, 'text/plain');
      response.end('OK\n');
    });

    config.load(['config.json', 'other_config.json']);
    server.listen(config.BIND_PORT, config.BIND_ADDR);


## License:

Released under the MIT License. Copyright (c) 2011-2012 Trevor Caira.
