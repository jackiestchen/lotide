const assertEqual = require("./assertEqual");

const without = (source, itemsToRemove) => {
  let hashRemoveItems = {};
  let output = [];
  for (let i = 0; i < itemsToRemove.length; i++) {
    hashRemoveItems[itemsToRemove[i].toString()] = itemsToRemove[i];
  }

  for (let i = 0; i < source.length; i++) {
    if (!hashRemoveItems[source[i].toString()]) {
      output.push(source[i]);
    } else if (!assertEqual(hashRemoveItems[source[i].toString()], source[i])) {
      output.push(source[i]);
    }
  }

  return output;

};

module.exports = without;

