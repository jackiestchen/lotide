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


function middle (arr) {
  let result = [];
  let middle = arr.length / 2;
  if (arr.length < 3) {
    return result;
  } else {
    if (arr.length % 2 === 0) {
      return result = arr.splice(middle - 1, 2);
    } else {
      return result = arr.splice(Math.floor(middle), 1);
    }
  }
}

console.log(middle([]));
console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 7, 8]));