//this is my attempt at making the map function
//this function takes two arguments, an array, and a callback, it returns a new array populated with elements from the callback
//this callback doesn't have to only return true, it could multiply or add or concatenate!

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;