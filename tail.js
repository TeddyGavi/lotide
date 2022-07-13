const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🖖🖖🖖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (allButTheFirst) => {
  return allButTheFirst.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
const resultEmpty = tail([]);
const resultOne = tail(["Test"]);
console.log(resultEmpty, resultOne);
assertEqual(result,  ["Lighthouse", "Labs"]);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["bubble", "top", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 4);