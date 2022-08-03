//a recursive solution to deal with nested objects only

const eqArrays  = require("../eqArrays");

const eqObjectsRecursion = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const x of keys1) {
    if (isArray(object1[x])) {
      if (!eqArrays(object1[x], object2[x])) {
        return false;
      }
    } else if (isObject(object1[x]) && isObject(object2[x])) {
      if (!eqObjectsRecursion(object1[x], object2[x])) {
        return false;
      }
    } else if (object1[x] !== object2[x]) {
      return false;
    }
  }
  return true;
};

// two helper function that determine whether an object is an object or if an array is an array! :)

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


module.exports = eqObjectsRecursion;

