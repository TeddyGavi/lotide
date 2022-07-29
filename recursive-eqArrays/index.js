const isArray = (arr) => {
  if (Array.isArray(arr)) {
    return true;
  }
}


const eqArraysRecursion = (arrayOne, arrayTwo) => {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
    for (let i = 0; i < arrayOne.length; i++) {
      if (isArray(arrayOne[i]) && isArray(arrayTwo[i])){
        if (!eqArraysRecursion(arrayOne[i], arrayTwo[i])) {
          return false;
        }
       } 
      else if (arrayOne[i] !== arrayTwo[i]) {
        return false;
        }

    }
      return true;
};



console.log(eqArraysRecursion([2, 3], [2, 3]))
console.log(eqArraysRecursion([[2, 3], [4]], [[2, 3], [4]])) // => true
console.log(eqArraysRecursion([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
console.log(eqArraysRecursion([[2, 3], [4]], [[2, 3], 4])) // => false


module.exports = eqArraysRecursion