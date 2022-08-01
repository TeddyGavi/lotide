const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🖖🖖🖖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
      }
    } else if (object1[x] !== object2[x]) {
      return false;
    }
  }

  return true;
};


const ab = {
  a: "1",
  b: "2",
};

const ba = {
  b: "2",
  a: "1",
};

const abc = {
  a: "1",
  b: "2",
  c: "3",
};

const cd = {
  c: "1",
  d: ["2", 3]
};

const dc = {
  d: ["2", 3],
  c: "1",
};

const cd2 = {
  c: "1",
  d: ["2", 3, 4],
};
const tops = {
  a: [4, 5, 6, 6],
  b: [2, 2, 2, 2],
  c: "The House"
};
const btm = {
  a: [4, 5, 6, 6],
  c: "the house",
  b: [2, 2, 2, 2],
};
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(tops, btm), false);
