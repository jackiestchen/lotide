

const middle = (arr) => {
  let result = [];
  let middle = arr.length / 2;
  if (arr.length < 3) {
    return result;
  } else {
    if (arr.length % 2 === 0) {
      return result = arr.splice(middle - 1, 2);
    } else {
      return result = arr.splice(Math.floor(middle), 1);
    }
  }
};



module.exports = middle;