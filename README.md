
# count-stream

Count the chunks a readable stream emits.

[![build status](https://secure.travis-ci.org/juliangruber/count-stream.png)](http://travis-ci.org/juliangruber/count-stream)

[![testling badge](https://ci.testling.com/juliangruber/count-stream.png)](https://ci.testling.com/juliangruber/count-stream)

## Example

```js
var countStream = require('count-stream');

source
.pipe(countStream(function(count) {
  console.log('count: %s', count);
}))
.pipe(maybeSomewhereElse);
```

## API

### countStream(fn)

Returns a transform stream that reemits all the data it gets, but calls `fn`
with the number of chunks that were sent through it, as soon as its source ends.

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install count-stream
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
