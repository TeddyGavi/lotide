const assert = require("chai").assert;
const flattenLoop = require("../flatten");

describe("#flattenLoop, flattens are array with one level of nesting", () => {
  it("returns a flattened array given one level of nesting", () => {
    assert.deepEqual(flattenLoop([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns a flattened array given one level of nesting", () => {
    assert.deepEqual(flattenLoop([1, [2], [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns a flattened array given one level of nesting", () => {
    assert.deepEqual(flattenLoop([1, 2, [3, 4, 5], [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("returns an unflattened array given two or more levels of nesting", () => {
    assert.deepEqual(flattenLoop([1, 2, [[3], 4], 5, [6]]), [1, 2, [3], 4, 5, 6]);
  });


});