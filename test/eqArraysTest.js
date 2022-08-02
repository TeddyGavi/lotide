const assert = require("chai").assert;
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
});