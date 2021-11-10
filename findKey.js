const findKey = function(input, callback) {
  let result;

  for (const el in input) {

    let booleanTest = callback(input[el]);
    if (booleanTest) {
      result = el;
      break;
    }
  }
  return result;
};

module.exports = findKey;

