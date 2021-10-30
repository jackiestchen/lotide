const assertArrayEqual = require('../assertArraysEqual');
const middle = require("../middle");


assertArrayEqual(middle([]), []);
assertArrayEqual(middle([1]),[]);
assertArrayEqual(middle([1, 2]), []);
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 7, 8]), [4]);


