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

 const test = [1, 2, 3, 4];
for (let i in test){
  console.log( `This is a for-in ${i}`);
}

for (let i of test){
  console.log(`this is a for-of ${i}`);
}
 



const flattenLoop = (oneNestedArray) => {
  const flattened = [];
 for (const ele of oneNestedArray){
    if (!Array.isArray(ele)){
      flattened.push(ele)
    } else if (Array.isArray(ele)) {
      flattened.push(...ele);
    }  
  }
    return flattened; 
} 

/* return oneNestedArray.filter(function(element) {
  return !Array.isArray(element);

 */

const flattenReduce = (oneLevelNesting) => {
  const flattened = oneLevelNesting.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return [...acc, ...item];
    } else {
    return [...acc, item];
    }
  },[]);
  return flattened;
}

const flattenConcat = (nested) => {
  const flattened = nested.reduce((acc, ele) => {
    return acc.concat(ele)
  },[]);
  return flattened;
}

console.log(flattenLoop([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
