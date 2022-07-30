const chai = require('chai');
const eqArraysRecursion = require('.');
const expect = chai.expect;


describe("#eqArraysRecursion, will compare two arrays and return true or false, regardless of the level of nested arrays present", () => {

  it("should return true given two non nested arrays", () => {
    expect(eqArraysRecursion([2, 3], [2, 3])).to.be.true;
  })

  it("should return true, given the same nested arrays", () => {
    expect(eqArraysRecursion([[2, 3], [4]], [[2, 3], [4]])).to.be.true;
  })

  it("should return false given two arrays of unequal nesting", () => {
    expect(eqArraysRecursion([[2, 3], [4]], [[2, 3], [4, 5]])).to.be.false;
  })

  it("should return false given two arrays of unequal nesting", () => {
    expect(eqArraysRecursion([[2, 3], [4]], [[2, 3], 4])).to.be.false;
  })

  it("should return true given two deeply nested equal arrays", () => {
    expect(eqArraysRecursion([[2, 3 [[[4, 1]]], [[[[[5]]]]]]], [[2, 3 [[[4, 1]]], [[[[[5]]]]]]])).to.be.true;
  })

  it("should return false when given a undefiend input", () => {
    expect(eqArraysRecursion([2, 4], undefined)).to.be.false;
  })

})