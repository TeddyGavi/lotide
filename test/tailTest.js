const assertArraysEqual = require("../assertArraysEqual");
const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Hello", "Lighthouse", "Labs"]);
const resultEmpty = tail([]);
const resultOne = tail(["Test"]);



//had to require the arrays equal function here in order to compare arrays in the following way.
assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["bubble", "top", "Lighthouse", "Labs"];
const wordsAfterTail = tail(words);
assertEqual(words.length, 4);
assertEqual(wordsAfterTail.length, 3);