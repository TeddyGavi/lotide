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
    console.log(`Arrays are Equal, Hooray!`);
  } else {
    console.log(`Arrays are not Equal, Boooo`);
  }
};

//my original solution
const without = (source, itemsToRemove) => {
  const filtered = [...source];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
      //this i is the index of the item to remove
        filtered.splice(i, 1);
      }
    }
  }
  return filtered;
};

// the filtered solution i needed help with
const withoutF = (source, itemsToRemove) => {
  return source.filter(function(el) {
    return !itemsToRemove.includes(el);
  });
};
// a new loop that i wasn't aware of that makes things way simplier
const withoutAdd = (source, itemsToRemove) => {
  const accumulator = [];
  for (const element in source) {
    if (!itemsToRemove.includes(element)) {
      accumulator.push(element);
    }
  }

  return accumulator;
};

/*
  const filtered = source.filter(function(currentElement, index) {
    //console.log(index);
    //console.log(currentElement);
    console.log(itemsToRemove[index])
    return currentElement !== itemsToRemove[index]
      
  });
  console.log(filtered); */


console.log(withoutF([1, 2, 3], [1])); // => [2, 3]
console.log(withoutF(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
console.log(withoutF(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
