/*global require*/

var /* xorIt = require('xor-it'), // Use this require if you load module through npm */
    xorIt = require('./dist/xorIt.js'),
    KEY = 'some-key',
    text = 'some-text',
    cipher = xorIt(KEY, text),
    originalText = xorIt(KEY, cipher);

console.log('KEY = %s', KEY);
console.log('text = %s', text);
console.log('cipher text = %s', cipher);
console.log('original text = %s', originalText);
