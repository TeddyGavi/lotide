const chai = require("chai").assert;
const { assert } = require("chai");
const countOnly = require("../countOnly");


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];





describe(`#countOnly \n given a list of firstNames and a object containing a the {name: boolean} where if true, the name is to be counted Here is the array of names:\n ${firstNames}`, () => {

  it("returns undefined if the name is not in the object list", () => {
    assert.equal(countOnly(firstNames, { "Karima": true }), undefined)
  })

  it("returns the correct object and count given for each name classified as true", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Fang": true, "Agouhanna": true }), { Jason: 1, Fang: 2, Agouhanna: 1, })
  })

  it("returns the correct object and count given for each name classified as true", () => {
    assert.deepEqual(countOnly(firstNames, { "Jason": true, "Fang": false, "Agouhanna": true }), { Agouhanna: 1, Jason: 1 })
  })


})