var countStream = require('./');
var test = require('tape');

test('count', function(t) {
  t.plan(3);

  var cs = countStream(function(count) {
    t.equal(count, 2);
  });

  cs.on('data', function(d) {
    t.ok(true);
  });

  cs.write('foo');
  cs.write('bar');
  cs.end();
});

