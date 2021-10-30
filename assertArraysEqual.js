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

// // console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// // console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// // console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// // console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false


// function eqArrays (arr1, arr2) {
//   if (arr1.length !== arr2.length){
//     return false;
//   } else {
//     for (let i = 0; i < arr1.length; i++) {
//       if (!assertEqual(arr1[i], arr2[i])){
//         return false;
//       }
//     }
//     return true;
//   }
// }

const eqArrays = require("./eqArrays");



function assertArrayEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${arr1} !== ${arr2}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}


module.exports = assertArrayEqual;