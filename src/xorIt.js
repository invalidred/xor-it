
/*global console*/
'use strict';

/**
 * xorIt is a utility function that takes a key and a text/cipher
 * If the text is a simple string it will retun a cipher
 * If the text is a cipher it will return the original simple string
 * It works using the vernam cipher technique
 * http://cwestblog.com/2013/08/19/javascript-simple-vernam-cipher/
 */

var xorIt = (key, textOrCipher) => {
  if (!key || !textOrCipher) {
    throw 'XorIt: needs key and textOrCipher';
  }

  let cipher = [],
      keyLength = key.length,
      fromCharCode = String.fromCharCode,
      len = textOrCipher.length,
      i = 0;

  for (; i < len; ++i) {
    cipher.push(fromCharCode(key.charCodeAt(i % keyLength)
      ^ textOrCipher.charCodeAt(i)));
  }

  return cipher.join('');
}

export default xorIt;
