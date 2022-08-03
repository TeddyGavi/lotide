//This is a shallow compare between two objects
//two objects need to be passed in as arguments!


//eqArrays is needed here for this function to work properly
const eqArrays = require("./eqArrays");


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
    if (Array.isArray(object1[x])) {
      if (!eqArrays(object1[x], object2[x])) {
        return false;
      }
    } else if (object1[x] !== object2[x]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;