const { eqObjects } = require("../assertObjectsEqual");
const { eqArrays } = require("../assertObjectsEqual");

const cd = {
  c: "1",
  d: ["2", 3]
};

const dc = {
  d: ["2", 3],
  c: "1",
};

const eqObjectsRecursion = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const x of keys1) {
    if (Array.isArray(object1[x])) {
      if (!eqArrays(object1[x], object2[x])) {
        return false;
        }
      }
      else if (isObject(object1[x]) && isObject(object2[x])) {
        if (!eqObjectsRecursion(object1[x], object2[x])) {
          return false;
        };
  }
    else if (object1[x] !== object2[x]) {
      return false;
    }
  }
  return true;
};


const isObject = (object) => {
  if (typeof object === "object" && !Array.isArray(object)) {
    return true;
  } else {
    return false;
  }
}

const isArray = (arr) => {
  if (Array.isArray(arr)) {
    return true;
  }
}



console.log(eqObjectsRecursion({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => tru
console.log(eqObjectsRecursion({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjectsRecursion({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false
console.log(eqObjectsRecursion({ a: { z: 1, y: { w: 3 }, }, b: 2 }, { a: { z: 1, y: { w: 3 }, }, b: 2 })); true
console.log(eqObjectsRecursion(cd, dc)) // => true








module.exports = eqObjectsRecursion;


/* 
const keys1 = Object.keys(object1);
if (keys1.length !== Object.keys(object2).length) {
  return false;
} 
else {
  for (const x of keys1) {
    // console.log(object1[x], object2[x])
    // console.log(Array.isArray(object1[x]))

     if (Array.isArray(object1[x]) && !eqArrays(object1[x], object2[x])) {
      return false;
     }
     else if (object1[x] !== object2[x]) {
      return false;
     } */