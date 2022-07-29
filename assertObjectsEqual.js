const inspect = require('util').inspect;

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

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const x of keys1) {

    if (Array.isArray(object1[x])) {
      if (!eqArrays(object1[x], object2[x])) {
        return false;
      };
    }
    else if (object1[x] !== object2[x]) {
      return false;
    };
  }

  return true;
};


const assertObjectsEqual = (object1, object2) => {
  if (eqObjects(object1, object2)) {
    console.log(`🖖🖖🖖 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};




const obj1 = {
  name: "Billy bob bo",
  occupation: "tea drinker",
  salary: [85, 90, 100],
};

const obj2 = {
  name: "Billy bob bo",
  salary: [85, 90, 100],
  occupation: "tea drinker",
};



// assertObjectsEqual(obj1, obj2);

module.exports = { eqObjects, eqArrays }