const findKey = function (input, callback) {
  let result; 

  for (const el in input ){
    // console.log(el);
    // console.log(callback(input[el]));
    // console.log(input[el].stars);
    let booleanTest = callback(input[el]);
    if (booleanTest) {
      result = el;
      break;
    }
  }
  return result;
}

module.exports = findKey;

// const cards = {
//   "Blue Hill":  {stars: 1},
//   "Akaleri":    {stars: 3},
//   "noma":       {stars: 2},
//   "elBulli":    {stars: 3},
//   "Ora":        {stars:2},
//   "Akelarre":   {stars: 3}
// }

// console.log(findKey(cards, x => x.stars === 2)); // => noma