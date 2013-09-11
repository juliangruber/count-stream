var countStream = require('./');

var cs = countStream(console.log);

cs.write('foo');
cs.write('bar');
cs.end();
