//this function takes two arguments, an array, and a callback
//the function returns elements of the array to a new array until the callback condition is met

const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
};

module.exports = takeUntil;