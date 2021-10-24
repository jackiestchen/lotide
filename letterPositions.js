// const lib = require('./assertArrayEquals.js');
const letterPositions = function(sentence) {
  const results = {};
  // sentence = sentence.split(" ").join("");
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i].toString()] && sentence[i] !== " ") {
      results[sentence[i].toString()] = [];
      results[sentence[i].toString()].push(i);
    } else if (results[sentence[i].toString()] && sentence[i] !== " ") {
      results[sentence[i].toString()].push(i);
    }
  }

  return results;
}

const words = "lighthouse in the house";
const hello = "hello";
console.log(letterPositions(words));
console.log(letterPositions(hello))


// console.log(words.match(/h/g).index);