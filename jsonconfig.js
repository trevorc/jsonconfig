'use strict';

var fs = require('fs');
var config = this;

function isObject(o) {
  return o && o.constructor === Object;
}

function extend(dst, src) {
  for (var k in src) if (src.hasOwnProperty(k)) {
    if (isObject(dst[k]) && isObject(dst[k])) {
      extend(dst[k], src[k]);
    } else dst[k] = src[k];
  }
}

exports.load = function(paths) {
  (paths || []).forEach(function(x) {
    extend(config, JSON.parse(fs.readFileSync(x, 'UTF-8')));
  });
};
