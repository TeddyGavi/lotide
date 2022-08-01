const assertEqual = require("../assertEqual");
const head = require("../head");

console.log(assertEqual((head([1, 2])), 1));
console.log(assertEqual((head([4, 2])), 4));
console.log(assertEqual((head([1, 2, 4, 4, 5, 5, 5])), 1));
console.log(assertEqual((head([19, 2, 6, 5, 3, 2])), 19));