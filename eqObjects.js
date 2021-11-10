const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  if (object1 === object2) return true;

  if (object1 === null || typeof object1 !== "object" ||
      object2 === null || typeof object2 !== "object") return false;
  for (const element in object1) {
    if (!object1[element] || !eqObjects(object1[element], object2[element])) return false;
  }

  return true;


};

module.exports = eqObjects;

