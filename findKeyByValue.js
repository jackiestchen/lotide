const assertEqual = function(actual, expected) {
  (typeof actual === 'string') ? (actual = "\"" + actual + "\"") : (actual);
  (typeof expected === 'string') ? (expected = "\"" + expected + "\"") : (expected);
  const failedEmoji = String.fromCodePoint(0x1F534);
  const passedEmoji = String.fromCodePoint(0x1F7E2);

  if (actual === expected) {
    return console.log(`${passedEmoji}${passedEmoji}${passedEmoji} Assertion Passed: ${actual} === ${expected}`);
    // return true;
  } else {
    return console.log(`${failedEmoji}${failedEmoji}${failedEmoji} Assertion Failed: ${actual} !== ${expected}`);
    // return false;
  }
};

const findKeyByValue = function (object, value) {
  for (var show in object) {
    if (object[show] === value){
      return show;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, ), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");