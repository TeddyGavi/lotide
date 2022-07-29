const eqArraysRecursion = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
};



eqArraysRecursion([[2, 3], [4]], [[2, 3], [4]]) // => true
eqArraysRecursion([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
eqArraysRecursion([[2, 3], [4]], [[2, 3], 4]) // => false


module.exports = eqArraysRecursion