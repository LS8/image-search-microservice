const chai = require('chai');
const assert = chai.assert;
const beautify = require('../helpers/beautify.js');

describe('Beautify', () => {

  it('Should return a string stating that there was an error', () => {
    assert.equal(typeof beautify('Cannot find any images', null), 'string');
  });

  it('Should return an object', () => {
    assert.equal(typeof beautify(null, {}), 'object');
  });

  it('Should beautify an object consisting of multiple objects', () => {
    const testObject = {
      0: {
        link: 'https://s-media-cache-ak0.pinimg.com/originals/3f/5c/49/3f5c4996fab56e32fdbf3db1d4a0ffe9.jpg',
        title: 'A football',
        image: {
          contextLink: 'https://www.pinterest.com/pin/27795722676303855/'
        }
      },
      1: {
        link: 'https://s-media-cache-ak0.pinimg.com/originals/3f/5c/49/3f5c4996fab56e32fdbf3db1d4a0ffe9.jpg',
        title: 'A football',
        image: {
          contextLink: 'https://www.pinterest.com/pin/27795722676303855/'
        }
      }
    };
    assert.equal(typeof beautify(null, testObject), 'object');
  });

});
