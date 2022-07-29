const chai = require('chai');
const eqArraysRecursion = require('.');
const expect = chai.expect;


describe("#eqArraysRecursion, will compare two arrays and return true or false, regardless of the level of nested arrays present", () => {

  it("should return true, given the same nested arrays", () => {
    expect(eqArraysRecursion([[2, 3], [4]], [[2, 3], [4]])).to.be.true;
  })

  it("should return false given two arrays of unequal nesting", () => {
    expect(eqArraysRecursion([[2, 3], [4]], [[2, 3], [4, 5]])).to.be.false;
  })

  it("should return false given two arrays of unequal nesting", () => {
    expect(eqArraysRecursion([[2, 3], [4]], [[2, 3], 4])).to.be.false;
  })

})