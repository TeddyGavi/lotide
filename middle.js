/*

Implement middle which will take in an array and return the middle-most element(s) of the given array.

For arrays with one or two elements, there is no middle. Return an empty array.
input is an array, output is the middle value of the array,
this could be varying lengths depending on even or odd. for odd, its 1,
for even its 2, unless the array length is 1 || 2

*/

const middle = (middleChild) => {
  const lengthOfArray = middleChild.length;
  const startOfMiddle = Math.floor((lengthOfArray / 2));
  if (lengthOfArray <= 2) {
    return [];
  } else if (lengthOfArray % 2 === 0) {
    return middleChild.slice(startOfMiddle - 1, startOfMiddle + 1);
  } else if (lengthOfArray % 2 !== 0) {
    return middleChild.slice(startOfMiddle, startOfMiddle + 1);
  }
};

module.exports = middle;