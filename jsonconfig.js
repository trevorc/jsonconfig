var fs = require('fs');
var config = this;

exports.load = function(paths) {
  (paths || []).forEach(function(x) {
    var obj = JSON.parse(fs.readFileSync(x, 'UTF-8'));
    for (k in obj) if (obj.hasOwnProperty(k)) config[k] = obj[k];
  });
};
