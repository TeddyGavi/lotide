//my original solution
//this function takes tow arguments a source array, and an item or items to remove, this will return the array without the items to remove

const without = (source, itemsToRemove) => {
  const filtered = [...source];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
      //this i is the index of the item to remove
        filtered.splice(i, 1);
      }
    }
  }
  return filtered;
};


/*
// the filtered solution i needed mentor help with


const withoutF = (source, itemsToRemove) => {
  return source.filter(function(el) {
    return !itemsToRemove.includes(el);
  });
};


// a new loop that i wasn't aware of that makes things way simplier
//Ian taught me about the for ..in loop which returns the keys of each value, since arrays are objects this works well here

const withoutAdd = (source, itemsToRemove) => {
  const accumulator = [];
  for (const element in source) {
    if (!itemsToRemove.includes(element)) {
      accumulator.push(element);
    }
  }

  return accumulator;
};
*/

module.exports = without;