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