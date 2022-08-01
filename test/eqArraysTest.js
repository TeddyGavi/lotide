const assertEqual = require("../assertEqual")
const eqArrays = require("../eqArrays")


assertEqual(eqArrays([1, 2, 3], [1, 2, 3,]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false