/*global it, describe, require*/

var chai = require('chai'),
    expect = chai.expect,
    xorIt = require('../dist/xorIt.js');

describe('xorIt', function() {
  var KEY = 'my-key',
      errorMessage = 'XorIt: needs key and textOrCipher';

  it('no key should throw error', function() {
    try {
      var cipher = xorIt();
    } catch (message) {
      expect(message).to.equal(errorMessage);
    }
  });

  it('basic usage test', function() {
    var text = 'some-text',
        cipher = xorIt(KEY, text),
        originalText = xorIt(KEY, cipher);

    expect(originalText).to.equal(text);
  });
});

