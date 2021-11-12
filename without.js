const without = (source, itemsToRemove) => {
  let hashRemoveItems = {};
  let output = [];
  for (let i = 0; i < itemsToRemove.length; i++) {
    hashRemoveItems[itemsToRemove[i].toString()] = itemsToRemove[i];
  }

  for (let i = 0; i < source.length; i++) {
    if (!hashRemoveItems[source[i].toString()]) {
      output.push(source[i]);
    } else if (hashRemoveItems[source[i].toString()] !== source[i]) {
      output.push(source[i]);
    }
  }

  return output;

};

module.exports = without;

const a = ["1", "1", "1", "2", "3", "1" , "1"];
const b = ["1", 2, "3"];

const c = ["1", "2", "3"];
const d = [1, 2, "3"];

const e = [1, 2, 3];
const f = [1];


console.log(without(a,b));
console.log(without(c,d));
console.log(without(e,f));
