const eqArrays = require("./eqArrays");

const assertArraysEqual = (arrOne, arrTwo) => {
  if (eqArrays(arrOne, arrTwo)) {
    console.log(`🖖🖖🖖 Arrays are Equal, Hooray!`);
  } else {
    console.log(`🤢🤢🤢 Arrays are not Equal, Boooo`);
  }
};

module.exports = assertArraysEqual;