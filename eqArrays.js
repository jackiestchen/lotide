// const assertEqual = function(actual, expected) {
//   (typeof actual === 'string') ? (actual = "\"" + actual + "\"") : (actual);
//   (typeof expected === 'string') ? (expected = "\"" + expected + "\"") : (expected);
//   const failedEmoji = String.fromCodePoint(0x1F534);
//   const passedEmoji = String.fromCodePoint(0x1F7E2);

//   if (actual === expected) {
//     // return console.log(`${passedEmoji}${passedEmoji}${passedEmoji} Assertion Passed: ${actual} === ${expected}`);
//     return true;
//   } else {
//     // return console.log(`${failedEmoji}${failedEmoji}${failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
//     return false;
//   }

// };

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

const assertEqual = require("./assertEqual");

function eqArrays (arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      if (!eqArrays(arr1[i], arr2[i])) return false;
    } else {
      if (arr1[i] !== arr2[i]) return false;
    }
  }

  return true;
 
}

module.exports = eqArrays;


// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false