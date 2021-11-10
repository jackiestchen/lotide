const countLetters = function(word) {
  let result = {};
  word = word.split(" ").join("");

  for (const letter of word) {
    if (!result[letter.toString()]) {
      let re = new RegExp(letter, "g");
      result[letter.toString()] = word.match(re).length;
    }
  }

  return result;
};

module.exports = countLetters;

