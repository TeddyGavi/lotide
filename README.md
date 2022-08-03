# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @TeddyGavi/lotide`

**Require it:**

`const _ = require('@TeddyGavi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`
* *__NOTE__:* \
*use findLib{...} for:* \
`const findKey = _.findLib.findKey(object, callback)`\
`const findKey_Obj = _.findLib.findKey_Obj(object, callback)`
## Documentation

The following functions are currently implemented:

* `countLetters(string)`: This function takes a single argument, a string, and will return a object containing { letter: [appearanceCount] } spaces are ignored.
* `countOnly(array, object)`: this function takes two arguments an array of items to count and an object that contains a boolean value to indicate if that key should be counted or not
if the key doesn't exist in the array undefined is returned.

* `eqArrays(array1, array2)`: A function which takes in two arrays and returns true if they are equal, otherwise false (shallow).

* `eqArraysRecursion(array1, array2)`: A function which takes in two arrays and returns true if they are equal, false otherwise. This function works with any level of nested arrays (shallow).

* `eqObjects(obj1, obj2)`: A function which takes in two objects and returns true if they are equal, false otherwise. (shallow)
* `eqObjectsRecursion(obj1, obj2)`: A function which takes in two objects and returns true if they are equal, false otherwise. This function can handle nested objects only (shallow).
* `findLib {... `: An Object that contains the following: 
  * `.findKey(object, callback)`: A function which takes in an object and a callback and returns the key as soon as the callback is true.
  * `.findKey_Obj(object, callback)`: A function which takes in an object and a callback and returns an object that contains the properties that pass the callback test. This is essentially filtering \
`}`
* `findKeyByValue(object, value)`:A function that takes two arguments, an object and a value of that object the corresponding key of that value is returned.

* `flatten(array)`: A function that takes an array with one level of nesting and returns the array without the nested elements. Note a very simple version here, this would be a good case for recursion if i have time in the future.
* `head(array)`: A function takes in an array and returns the first element of that array.
* `letterPositions(string)`: A function that takes a string and returns an object that contains each letter and the index that each letter occurs at.
* `map(array, callback)`: This is my attempt at re-making the map function. This function takes two arguments, an array, and a callback, it returns a new array populated with elements from the callback this callback doesn't have to only return true, it could multiply or add etc.
* `middle(array)`:A function that takes in an array and return the middle-most element(s if length is even) of the given array.
* `tail(array)`: A function that returns all but the first element of an array.
* `takeUntil(array, callback)`://this function takes two arguments, an array, and a callback. The function returns elements of the array to a new array until the callback condition is met.
* `without(array, toRemove)`: This function takes two arguments a source array, and an item(s) to remove and return the array without those item(s).
