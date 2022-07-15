const eqArrays = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    let trueCounter = 0;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      } else {
        trueCounter++;
      }
    }
 
    return trueCounter === arrayOne.length ? true : false;
  }
};

const assertArraysEqual = (arrOne, arrTwo) => {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`Arrays are Equal, Hooray!`)
  } else {
    console.log(`Arrays are not Equal, Boooo`)
  }
};

assertArraysEqual(["Hi", "Hi"], ["Hi", "Hi"]); // logging the hooray statement
assertArraysEqual(["H1i", "Hi"], ["Hi", "Hi"]); // logging the boooo statement
assertArraysEqual([1, 2], [1, 2]); // loging the hooray statement