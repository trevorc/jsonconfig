(function() {
  var config, extend, fs;
  var __slice = Array.prototype.slice;
  fs = require('fs');
  config = this;
  extend = function(obj, other) {
    var key, val, _results;
    _results = [];
    for (key in other) {
      val = other[key];
      _results.push(obj[key] = val);
    }
    return _results;
  };
  this.load = function(paths, callback) {
    var appendFile;
    appendFile = function(_arg) {
      var x, xs;
      x = _arg[0], xs = 2 <= _arg.length ? __slice.call(_arg, 1) : [];
      if (x == null) {
        return callback(null, config);
      }
      return fs.readFile(x, 'UTF-8', function(err, data) {
        if (err != null) {
          return callback(err);
        } else {
          try {
            extend(config, JSON.parse(data));
          } catch (e) {
            return callback(e);
          }
          return appendFile(xs);
        }
      });
    };
    return appendFile(paths);
  };
}).call(this);
