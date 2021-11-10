const eqArrays = require("./eqArrays");

const assertArrayEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${arr1} !== ${arr2}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


module.exports = assertArrayEqual;