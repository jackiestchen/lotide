const assert = require('chai').assert;
const tail = require('../tail');

describe ('#Tail', () => {
  it (`returns ["Lighthouse", "Labs"] for ["Yo Yo, "Lighthouse", "Labs"]`, () =>{
    const input = ['Yo Yo', 'Lighthouse', 'Labs'];
    const expectedOutput = ['Lighthouse', 'Labs'];

    assert.deepEqual(tail(input), expectedOutput);
  });

  it (`return [] for []`, () => {
    const input = [];
    const expectedOutput = [];

    assert.deepEqual(tail(input), expectedOutput);
  });

  it (`return [2,3,4,5] for [1,2,3,4,5]`, () => {
    const input = [1,2,3,4,5];
    const expectedOutput = [2,3,4,5];

    assert.deepEqual(tail(input), expectedOutput);
  });
});