const assert = require('chai').assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it ("returns true when input is ({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))", () => {
    const inputA = { a: { z: 1 }, b: 2 };
    const inputB = { a: { z: 1 }, b: 2 };
    const expectedOutput = true;

    assert.equal(eqObjects(inputA, inputB), expectedOutput);
  })

  it ("return false when input is ({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })", () => {
    const inputA = { a: { y: 0, z: 1 }, b: 2 };
    const inputB = { a: { z: 1 }, b: 2 };
    const expectedOutput = false;

    assert.equal(eqObjects(inputA, inputB), expectedOutput);
  })

  it ("return false when input is ({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })", () => {
    const inputA = { a: { y: 0, z: 1 }, b: 2 };
    const inputB = { a: 1, b: 2 };
    const expectedOutput = false;

    assert.equal(eqObjects(inputA, inputB), expectedOutput);
  })

  it ("return true when input is ({ a: { y: 0, z: { c: 1 } }, b: 2 }, {{ a: { y: 0, z: { c: 1 } }, b: 2 })", () => {
    const inputA = { a: { y: 0, z: { c: 1 } }, b: 2 };
    const inputB = { a: { y: 0, z: { c: 1 } }, b: 2 };
    const expectedOutput = true;

    assert.equal(eqObjects(inputA, inputB), expectedOutput);
  })

})