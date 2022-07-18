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

const assertArraysEqual = (arrOne, arrTwo) => {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`Arrays are Equal, Hooray!`)
  } else {
    console.log(`Arrays are not Equal, Boooo`)
  }
};


//loop through the given string, for each letter in the string, create an array 
//that contains the index of the letter in the string, this may be multiple numbers
//return an object that contains each letter and the index that each letter occurs at

const letterPositions = (sentence) => {
  const result = {};
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] !== " ") {
    if (result[sentence[i]]){
    result[sentence[i]].push(i);
    } else {
      result[sentence[i]] = [i];
    }
  }
}
  return result;
}

console.log(letterPositions("Lighthouse in the house"));

//console.log(letterPositions("lighthouse in the house"))

// should return an object

/* result = {

  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
} */