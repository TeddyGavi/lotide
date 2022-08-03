//this function takes two arguments an array of names, or items to count and an object that contains a boolean to indicate if that item should be counted or not
//if the item to count doesn't exist in the array undefined is returned

const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const key in itemsToCount) {
    if (!allItems.includes(key)) {
      return undefined;
    }
  }
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;

