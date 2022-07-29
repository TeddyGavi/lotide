const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🖖🖖🖖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* ----  Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match. <---- */


//first compare if the arrays are the same length
/* const compareArrayLength = (arrOne, arrTwo) => {
  if (arrOne.length === arrTwo.length){
    return true;
  } else {
    return `Please enter Arrays that are the same length.`
  }
  return arrOne.length === arrTwo.length ? true : `Please enter Arrays that are the same length.`;
} */

// input is two arrays, the output is true if the the arrays are the same, else the output is false.
// to make a function that
//loops through each array and compare each item strictly to see if they are equal


const eqArrays = (arrayOne, arrayTwo) => {
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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3,]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// debugging
//console.log(`true count is: ${trueCount}`);
//console.log(`flase count is: ${falseCount}`);
//console.log(`array length is: ${arrayOne.length}`)