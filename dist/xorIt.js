/**
 * xorIt is a utility function that takes a key and a text/cipher
 * If the text is a simple string it will retun a cipher
 * If the text is a cipher it will return the original simple string
 * It works using the vernam cipher technique
 * http://cwestblog.com/2013/08/19/javascript-simple-vernam-cipher/
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = xorIt;

function xorIt(key, textOrCipher) {
  if (!key || !textOrCipher) {
    throw 'XorIt: needs key and textOrCipher';
  }

  var cipher = [];
  var keyLength = key.length;
  var fromCharCode = String.fromCharCode;

  for (var i = 0; i < textOrCipher.length; ++i) {
    cipher.push(fromCharCode(key.charCodeAt(i % keyLength) ^ textOrCipher.charCodeAt(i)));
  }

  return cipher.join('');
}

module.exports = exports['default'];