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


/*

Implement middle which will take in an array and return the middle-most element(s) of the given array.

The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

    For arrays with one or two elements, there is no middle. Return an empty array. */

// input is an array, output is the middle value of the array, this could be varying lengths depending on even or odd. for odd, its 1, for even its 2, unless the array length is 1 || 2



const middle = (middleChild) => {
  const lengthOfArray = middleChild.length
  const startOfMiddle = Math.floor((lengthOfArray/2));
  if (lengthOfArray <= 2){
    return [];
  } else if (lengthOfArray % 2 === 0){
    return middleChild.slice(startOfMiddle-1, startOfMiddle +1);
  } else if (lengthOfArray % 2 !== 0){
    return middleChild.slice(startOfMiddle, startOfMiddle +1)
  }
}

//trying to work through the filter method here
const middleFilter = (findMiddleArray) => {
  return findMiddleArray.filter(function(ele) {

  })
}

//test cases:
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
