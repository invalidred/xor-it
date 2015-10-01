# xor-it

A module to xor strings using vernam cipher technique. Built in ES6, transpiled to ES5 using babel.

## Installation

`npm install xor-it --save`

## Usage

### To get a cipher from string

```javascript

var xorIt = require('xor-it');
var cipher = xorIt('you-key-here', 'some-text');

```

### To get string from a cipher

```javascript

var xorIt = require('xor-it');
var originalText = xorIt('your-key-here', cipher);

 ```

## Run Code Sample

`node example.js`

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 2015-09-30    1.0.1 Added tests  
* 2015-09-29    1.0.0 Initial release  

## License

MIT license; see [LICENSE](./LICENSE).

(c) 2015 by Abdul Khan and Alexey Novak
