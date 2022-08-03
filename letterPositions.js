//loop through the given string, for each letter in the string, create an array
//that contains the index of the letter in the string, this may be multiple numbers
//return an object that contains each letter and the index that each letter occurs at

const letterPositions = (sentence) => {
  const result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  return result;
};


module.exports = letterPositions;