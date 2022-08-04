//This is a function which test if two objects are equal. This is a recursive solution that allows for nested objects or arrays
//two objects need to be passed in as arguments!


//eqArrays is needed here for this function to work properly
const eqArrays = require("./eqArrays");

// two helper functions that determine whether an object is an object or if an array is an array! :)

const isObject = (object) => {
  if (typeof object === "object" && !Array.isArray(object)) {
    return true;
  } else {
    return false;
  }
};

const isArray = (arr) => {
  if (Array.isArray(arr)) {
    return true;
  }
};

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  //if the objects have different lengths they are not equal!

  if (keys1.length !== keys2.length) {
    return false;
  }

  //first we make see if the values being compared are arrays, if yes we compare them using eqArrays
  //if not we compare the values of each object

  for (const x of keys1) {
    if (isArray(object1[x])) {
      if (!eqArrays(object1[x], object2[x])) {
        return false;
      }
    } else if (isObject(object1[x]) && isObject(object2[x])) {
      if (!eqObjects(object1[x], object2[x])) {
        return false;
      }
    } else if (object1[x] !== object2[x]) {
      return false;
    }
  }
  return true;
};





module.exports = eqObjects;