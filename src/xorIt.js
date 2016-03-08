/**
 * xorIt is a utility function that takes a key and a text/cipher
 * If the text is a simple string it will retun a cipher
 * If the text is a cipher it will return the original simple string
 * It works using the vernam cipher technique
 * http://cwestblog.com/2013/08/19/javascript-simple-vernam-cipher/
 */

export default function xorIt(key, textOrCipher) {
  if (!key || !textOrCipher) {
    throw 'XorIt: needs key and textOrCipher';
  }

  let cipher = [];
  const keyLength = key.length;
  const { fromCharCode } = String;

  for (let i = 0; i < textOrCipher.length; ++i) {
    cipher.push(fromCharCode(key.charCodeAt(i % keyLength)
      ^ textOrCipher.charCodeAt(i)));
  }

  return cipher.join('');
}
