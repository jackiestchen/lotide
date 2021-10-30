// const assertEqual = function(actual, expected) {
//   (typeof actual === 'string') ? (actual = "\"" + actual + "\"") : (actual);
//   (typeof expected === 'string') ? (expected = "\"" + expected + "\"") : (expected);
//   const failedEmoji = String.fromCodePoint(0x1F534);
//   const passedEmoji = String.fromCodePoint(0x1F7E2);

//   if (actual === expected) {
//     return console.log(`${passedEmoji}${passedEmoji}${passedEmoji} Assertion Passed: ${actual} === ${expected}`);
//     // return true;
//   } else {
//     return console.log(`${failedEmoji}${failedEmoji}${failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
//     // return false;
//   }

// };

const countLetters = function(word) {
  let result = {};
  word = word.split(" ").join("");

  for (const letter of word){
    if (!result[letter.toString()]) {
      let re = new RegExp(letter, "g");
      result[letter.toString()] = word.match(re).length;
    }
  }

  return result;
};

module.exports = countLetters;


// const s = "lighthouse in the house";

// const count = countLetters(s);

// console.log(count);