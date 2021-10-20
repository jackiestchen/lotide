const assertEqual = function(actual, expected) {
  (typeof actual === 'string') ? (actual = "\"" + actual + "\"") : (actual);
  (typeof expected === 'string') ? (expected = "\"" + expected + "\"") : (expected);
  const failedEmoji = String.fromCodePoint(0x1F534);
  const passedEmoji = String.fromCodePoint(0x1F7E2);

  if (actual === expected) {
    return console.log(passedEmoji + passedEmoji + passedEmoji + "Assertion Passed: " + actual + " === " + expected);
  } else {
    return console.log(failedEmoji + failedEmoji + failedEmoji + "Assertion Failed: " + actual + " !== " + expected);
  }

};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Hello", "Hello");
assertEqual(2, 3);
assertEqual("2", "3");