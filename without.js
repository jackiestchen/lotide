const assertEqual = function(actual, expected) {
  (typeof actual === 'string') ? (actual = "\"" + actual + "\"") : (actual);
  (typeof expected === 'string') ? (expected = "\"" + expected + "\"") : (expected);
  const failedEmoji = String.fromCodePoint(0x1F534);
  const passedEmoji = String.fromCodePoint(0x1F7E2);

  if (actual === expected) {
    // return console.log(`${passedEmoji}${passedEmoji}${passedEmoji} Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    // return console.log(`${failedEmoji}${failedEmoji}${failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }

};

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false


function eqArrays (arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (!assertEqual(arr1[i], arr2[i])){
        return false;
      }
    }
    return true;
  }
}


function assertArrayEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${arr1} !== ${arr2}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

function without(source, itemsToRemove) {
  let hashRemoveItems = {};
  let output = [];
  for (let i = 0; i < itemsToRemove.length; i++) {
    hashRemoveItems[itemsToRemove[i].toString()] = itemsToRemove[i];
  }

  for (let i = 0; i < source.length; i++){
    if (!hashRemoveItems[source[i].toString()]){
      output.push(source[i]);
    } else if (!assertEqual(hashRemoveItems[source[i].toString()], source[i])){
      output.push(source[i]);
    }
  }

  return output;  

}

const words = ['hello', 'world', 'lighthouse'];


console.log(without([1,2,3] , [1]));
console.log(without(["1", "2", "3"] , [1, 2, "3"]));

// console.log(words);

console.log(without(words, ["lighthouse"]));
// console.log(words);
console.log(without(words, ["hello", "world", "lighthouse"]))
console.log(words);

