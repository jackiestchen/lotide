const findKeyByValue = function(object, value) {
  for (let show in object) {
    if (object[show] === value) {
      return show;
    }
  }
};

module.exports = findKeyByValue;
