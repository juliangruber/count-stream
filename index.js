var Transform = require('stream').Transform;
var once = require('once');

module.exports = countStream;

function countStream(cb) {
  cb = once(cb);

  var count = 0;
  var t = Transform({ objectMode: true });

  t._transform = function(chunk, enc, cb) {
    count++;
    cb(null, chunk);
  };

  t._flush = function() {
    cb(count);
  };

  return t;
}
