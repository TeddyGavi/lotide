const assert = require("chai").assert;
const expect = require("chai").expect;
const eqArrays = require("../eqArrays");


describe("#eqArrays takes two arrays and compare the values, returning true if they are equal (shallow)", () => {
  it("returns true for [1, 2, 3], [1, 2, 3,] ", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3,]));
  });

  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it("returns true for ['1', '2', '3'], ['1', '2', '3'] ", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  it("should return true given two non nested arrays", () => {
    expect(eqArrays([2, 3], [2, 3])).to.be.true;
  });

  it("should return true, given the same nested arrays", () => {
    expect(eqArrays([[2, 3], [4]], [[2, 3], [4]])).to.be.true;
  });

  it("should return false given two arrays of unequal nesting", () => {
    expect(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])).to.be.false;
  });

  it("should return false given two arrays of unequal nesting", () => {
    expect(eqArrays([[2, 3], [4]], [[2, 3], 4])).to.be.false;
  });

  it("should return true given two deeply nested equal arrays", () => {
    expect(eqArrays([[2, 3 [[[4, 1]]], [[[[[5]]]]]]], [[2, 3 [[[4, 1]]], [[[[[5]]]]]]])).to.be.true;
  });

  it("should return false given two deeply nested arrays that aren't equal", () => {
    expect(eqArrays([[2, 3], [[[4]]], [[[[[5]]]]]], [[2, 3], [[[4, 1]]], [[[[[5]]]]]])).to.be.false;
  });

  it("should return false when given a undefined input", () => {
    expect(eqArrays([2, 4], undefined)).to.be.false;
  });
});