'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _chai = require('chai');

var _distXorItJs = require('../dist/xorIt.js');

var _distXorItJs2 = _interopRequireDefault(_distXorItJs);

describe('xorIt', function () {
  var key = 'my-key';
  var errorMessage = 'XorIt: needs key and textOrCipher';

  var testText = 'test text';
  var cipher = undefined;

  beforeEach(function () {
    cipher = undefined;
  });

  it('no key should throw error', function () {
    try {
      cipher = (0, _distXorItJs2['default'])();
    } catch (message) {
      (0, _chai.expect)(message).to.equal(errorMessage);
    }
  });

  it('null key', function () {
    try {
      cipher = (0, _distXorItJs2['default'])(null, testText);
    } catch (message) {
      (0, _chai.expect)(message).to.equal(errorMessage);
    }
  });

  it('undefined key', function () {
    try {
      cipher = (0, _distXorItJs2['default'])(undefined, testText);
    } catch (message) {
      (0, _chai.expect)(message).to.equal(errorMessage);
    }
  });

  it('empty key', function () {
    try {
      cipher = (0, _distXorItJs2['default'])('', testText);
    } catch (message) {
      (0, _chai.expect)(message).to.equal(errorMessage);
    }
  });

  it('non-empty key', function () {
    cipher = (0, _distXorItJs2['default'])('some key', testText);
    (0, _chai.expect)(cipher).to.equal('\u0007\n\u001e\u0011\u0000\u001f\u0000\u0001\u0007');

    cipher = (0, _distXorItJs2['default'])(key, testText);
    (0, _chai.expect)(cipher).to.equal('\u0019\u001c^\u001fE\r\b\u0001Y');
  });

  it('multiple xor', function () {
    for (var i = 0; i < 10; ++i) {
      cipher = (0, _distXorItJs2['default'])(i.toString(), testText);
      testText = cipher;
    }

    (0, _chai.expect)(cipher).to.equal('udru!udyu');
  });

  it('back and forth', function () {
    cipher = (0, _distXorItJs2['default'])(key, testText);
    var originalText = (0, _distXorItJs2['default'])(key, cipher);

    (0, _chai.expect)(originalText).to.equal(testText);
  });
});