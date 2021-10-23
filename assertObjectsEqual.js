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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let result = false;
  for (const element in object1) {
    if (!object1[element.toString()]) {
      return false;
    } else if (Array.isArray(object1[element.toString()]) ) {
      if (!eqArrays(object1[element.toString()], object2[element.toString()])) {
        return false;
      }      
    }
  }
  return true;
};

// const ab = {a: "1", b: "2"};
// const ba = {b: "2", a: "1"};

// console.log(eqObjects(ab, ba), true);

// const abc = {a: "1", b: "2", c: "3"};
// console.log(eqObjects(ab, abc), false);

// const cd = {c: "1", d: ["2", 3]};
// const dc = {d: ["2", 3], c: "1"};

// console.log(eqObjects(cd, dc));

// const cd2 = {c: "1", d: ["2", 3, 4]};

// console.log(eqObjects(cd, cd2));

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};

assertObjectsEqual(ab, ba);

const abc = {a: "1", b: "2", c: "3"};

assertObjectsEqual(ab, abc);

const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};

assertObjectsEqual(cd, dc);

const cd2 = {c: "1", d: ["2", 3, 4]};

assertObjectsEqual(cd, cd2);
