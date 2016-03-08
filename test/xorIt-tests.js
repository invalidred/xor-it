import { expect } from 'chai';
import xorIt from '../dist/xorIt.js';

describe('xorIt', () => {
  const key = 'my-key';
  const errorMessage = 'XorIt: needs key and textOrCipher';

  let testText = 'test text';
  let cipher;

  beforeEach(() => {
    cipher = undefined;
  });

  it('no key should throw error', () => {
    try {
      cipher = xorIt();
    } catch (message) {
      expect(message).to.equal(errorMessage);
    }
  });

  it('null key', () => {
    try {
      cipher = xorIt(null, testText);
    } catch (message) {
      expect(message).to.equal(errorMessage);
    }
  });

  it('undefined key', () => {
    try {
      cipher = xorIt(undefined, testText);
    } catch (message) {
      expect(message).to.equal(errorMessage);
    }
  });

  it('empty key', () => {
    try {
      cipher = xorIt('', testText);
    } catch (message) {
      expect(message).to.equal(errorMessage);
    }
  });

  it('non-empty key', () => {
    cipher = xorIt('some key', testText);
    expect(cipher).
      to.equal('\u0007\n\u001e\u0011\u0000\u001f\u0000\u0001\u0007');

    cipher = xorIt(key, testText);
    expect(cipher).to.equal('\u0019\u001c^\u001fE\r\b\u0001Y');
  });

  it('multiple xor', () => {
    for (let i = 0; i < 10; ++i) {
      cipher = xorIt(i.toString(), testText);
      testText = cipher;
    }

    expect(cipher).to.equal('udru!udyu');
  });

  it('back and forth', () => {
    cipher = xorIt(key, testText);
    const originalText = xorIt(key, cipher);

    expect(originalText).to.equal(testText);
  });
});

