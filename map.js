const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["The", "quick", "brown", "fox", "jumped", "over", "the","lazy", "dog"];

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
    console.log(`Arrays are Equal, Hooray!`);
  } else {
    console.log(`Arrays are not Equal, Boooo`);
  }
};


const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }

  return results;
};
const results1 = map(words, word => word[0]);

assertArraysEqual(map(words2, word => word[0]), ["T", "q", "b", "f", "j", "o", "t", "l", "d"]);
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);