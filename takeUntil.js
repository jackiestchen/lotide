const takeUntil = function(array, callback) {
  let result = [];
  for (const element of array) {
    if (!callback(element)) {
      result.push(element);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;

