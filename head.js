// const assertEqual = function(actual, expected) {
//   (typeof actual === 'string') ? (actual = "\"" + actual + "\"") : (actual);
//   (typeof expected === 'string') ? (expected = "\"" + expected + "\"") : (expected);
//   const failedEmoji = String.fromCodePoint(0x1F534);
//   const passedEmoji = String.fromCodePoint(0x1F7E2);

//   if (actual === expected) {
//     return console.log(`${passedEmoji}${passedEmoji}${passedEmoji} Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     return console.log(`${failedEmoji}${failedEmoji}${failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
//   }

// };
const assertEqual = require('./assertEqual');

const head = function(arr) {
  return arr[0];
}

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;