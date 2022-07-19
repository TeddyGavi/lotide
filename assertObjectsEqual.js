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
  const keysForObj1 = Object.keys(object1);
  const keysForObj2 = Object.keys(object2);

  if (keysForObj1.length !== keysForObj2.length) {
    return false;
  } else {
    for (const key of keysForObj1) {
      if (Array.isArray(object1[key])) {
        return eqArrays(object1[key], object2[key]);
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
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



assertObjectsEqual(obj1, obj2);