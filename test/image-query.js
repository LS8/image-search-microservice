const chai = require('chai');
const assert = chai.assert;
const imageQuery = require('../helpers/image-query.js');

describe('Query Google Api', () => {
  it('Should return an object when called correctly', () => {
    assert.equal(typeof imageQuery('cat'), 'object');
  });
});
