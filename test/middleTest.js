// const assertArrayEqual = require('../assertArraysEqual');
// const middle = require("../middle");


// assertArrayEqual(middle([]), []);
// assertArrayEqual(middle([1]),[]);
// assertArrayEqual(middle([1, 2]), []);
// assertArrayEqual(middle([1, 2, 3]), [2]);
// assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArrayEqual(middle([1, 2, 3, 4, 5, 7, 8]), [4]);


const assert = require('chai').assert;
const middle = require('../middle');

describe("#Middle",() => {
  it (`returns [] for []`, () => {
    const input = [];
    const expectedOutput = [];
    
    assert.deepEqual(middle(input), expectedOutput);
  });

  it (`returns [] for [1]`, () => {
    const input = [1];
    const expectedOutput = [];

    assert.deepEqual(middle(input), expectedOutput);
  });

  it (`returns [] for [1, 2]`, ()=> {
    const input = [1, 2];
    const expectedOutput = [];

    assert.deepEqual(middle(input), expectedOutput);
  });

  it (`returns [2] for [1, 2, 3]`, () => {
    const input = [1, 2, 3];
    const expectedOutput = [2];

    assert.deepEqual(middle(input), expectedOutput);
  });

  it (`returns [2, 3] for [1, 2, 3, 4]`, () => {
    const input = [1, 2, 3, 4];
    const expectedOutput = [2, 3];

    assert.deepEqual(middle(input), expectedOutput);
  });


  it (`returns [4] for [1, 2, 3, 4, 5, 6, 7]`, () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    const expectedOutput = [4];

    assert.deepEqual(middle(input), expectedOutput);
  })
});