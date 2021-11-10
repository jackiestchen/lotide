const flatten = (arr) => {
  let output = [];
  arr.forEach(function(element) {
    if (Array.isArray(element)) {
      output.push(...flatten(element));
    } else {
      output.push(element);
    }
  });
  return output;
};

module.exports = flatten;

