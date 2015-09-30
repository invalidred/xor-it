/*global it, describe, require*/

var chai = require('chai'),
    expect = chai.expect,
    xorIt = require('../dist/xorIt.js');

describe('xorIt', function() {
  var key = 'my-key',
      errorMessage = 'XorIt: needs key and textOrCipher',
      testText = 'test text',
      cipher;

  beforeEach(function() {
    cipher = undefined;
  });

  it('no key should throw error', function() {
    try {
      cipher = xorIt();
    } catch (message) {
      expect(message).to.equal(errorMessage);
    }
  });

  it('null key', function() {
    try {
      cipher = xorIt(null, testText);
    } catch (message) {
      expect(message).to.equal(errorMessage);
    }
  });

  it('undefined key', function() {
    try {
      cipher = xorIt(undefined, testText);
    } catch (message) {
      expect(message).to.equal(errorMessage);
    }
  });

  it('empty key', function() {
    try {
      cipher = xorIt('', testText);
    } catch (message) {
      expect(message).to.equal(errorMessage);
    }
  });

  it('non-empty key', function() {
    cipher = xorIt('some key', testText);
    expect(cipher).
      to.equal('\u0007\n\u001e\u0011\u0000\u001f\u0000\u0001\u0007');

    cipher = xorIt(key, testText);
    expect(cipher).to.equal('\u0019\u001c^\u001fE\r\b\u0001Y');
  });

  it('multiple xor', function() {
    for (var i=0; i < 10; ++i) {
      cipher = xorIt(i.toString(), testText);
      testText = cipher;
    }

    expect(cipher).to.equal('udru!udyu');
  });

  it('back and forth', function() {
    var cipher = xorIt(key, testText),
        originalText = xorIt(key, cipher);

    expect(originalText).to.equal(testText);
  });
});

