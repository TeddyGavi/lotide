//a function which takes two arrays and returns true if they are equal, this function works with any level of nested arrays

//helper function to determine is an array is an array

const isArray = (arr) => {
  if (Array.isArray(arr)) {
    return true;
  }
};

const eqArrays = (arrayOne, arrayTwo) => {
  if (!arrayOne || !arrayTwo) {
    return false;
  } else if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (isArray(arrayOne[i]) && isArray(arrayTwo[i])) {
      if (!eqArrays(arrayOne[i], arrayTwo[i])) {
        return false;
      }
    } else if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }

  }
  return true;
};


module.exports = eqArrays;


