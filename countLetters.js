const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🖖🖖🖖 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤢🤢🤢 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = (countLettersInMe) => {
  const toCount = countLettersInMe.toLowerCase().replace(/\s/g, "");
  const result = {};
  for (const letter of toCount) {
    // result[letter] = (result[letter] || result.hasOwnProperty(letter)) + 1;
    if(result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

//Gords solution below!

/* const countLetters1 = function (string) {
  let results = {};
  
  for (const letter of string) {
    if (letter === ' ') {
      continue;
    } else {
      results[letter] = (results[letter] || 0) + 1;
    }
  } return results;
};
 */
console.log(countLetters("Lighthouse in the house"));
console.log(countLetters("racecar"))

