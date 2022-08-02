const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly")
const eqArrays = require("./eqArrays")
const eqObjects =require("./eqObjects")
const findKey = require("./findKey")
const findKeyByValue = require("./findKeyByValue");
const flatten = require ("./flatten");
const letterPositions = require("./letterPositions")
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without");
const eqArraysRecursion = require("./recursive-eqArrays/index");
const eqObjectsRecursion = require("./recursive-eqObjects/index");

module.exports = {
  
  countLetters,
  countOnly,
  eqArrays,
  eqArraysRecursion,
  eqObjects,
  eqObjectsRecursion,
  findKey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  middle,
  map,
  tail,
  takeUntil,
  without,

}