const assertEqual = function(actual, expected) {
  (typeof actual === 'string') ? (actual = "\"" + actual + "\"") : (actual);
  (typeof expected === 'string') ? (expected = "\"" + expected + "\"") : (expected);
  const failedEmoji = String.fromCodePoint(0x1F534);
  const passedEmoji = String.fromCodePoint(0x1F7E2);

  if (actual === expected) {
    return console.log(`${passedEmoji}${passedEmoji}${passedEmoji} Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`${failedEmoji}${failedEmoji}${failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
  }

};



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  //temporary code:
  // console.log('array: ', array);
  // console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    // console.log(`item BEFORE: ${item}`);
    // console.log(`item AFTER: ${callback(item)}`);
    // console.log(`---`);
    results.push(callback(item));
  }
  return results;
}




const results1 = map(words, word => word[0]);
console.log(results1);

