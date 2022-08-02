const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🖖🖖🖖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};
const starObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};


//this is the solution to the original problem
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};


//this function returns a new objects populated with only the star objects that pass the test, it is essentailly filtering
const findKeyAndReturnsAnObj = function(object, callback) {
  const starList = {};
  for (const star in object) {
    if (callback(object[star])) {
      starList[star] = object[star];
    }
  }
  return starList;
};

console.log(findKey(starObject, x => x.stars === 2)); // => "noma"
console.log(findKeyAndReturnsAnObj(starObject, x => x.stars === 2));
console.log(findKeyAndReturnsAnObj(starObject, x => x.stars === 3));
assertEqual(findKey(starObject, x => x.stars === 2),  "noma"); //true
assertEqual(findKey(starObject, x => x.stars === 1),  "Blue Hill"); //true
assertEqual(findKey(starObject, x => x.stars === 3),  "Akaleri"); //true
assertEqual(findKey(starObject, x => x.stars === 3),  "noma"); //false

module.exports = findKey