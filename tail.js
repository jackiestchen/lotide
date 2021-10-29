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

const tail = function(arr) {
  // let result = arr.slice(1)
  return arr.slice(1);
};

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// console.log(words);
// assertEqual(words.length, 3);

module.exports = tail;