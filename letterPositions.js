const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i].toString()] && sentence[i] !== " ") {
      results[sentence[i].toString()] = [];
      results[sentence[i].toString()].push(i);
    } else if (results[sentence[i].toString()] && sentence[i] !== " ") {
      results[sentence[i].toString()].push(i);
    }
  }

  return results;
};

module.exports = letterPositions;

