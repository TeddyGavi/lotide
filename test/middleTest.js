const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle: returns the middle element of an array, if the array.length is even, the middle two elements are returned", () => {
  it("returns an empty array for an array of one element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array for an array of two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] given [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] given [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns ['pink', 'salmon'] given ['bob', 'pink', 'salmon', 'dude']", () => {
    assert.deepEqual(middle(["bob", "pink", "salmon", "dude"]), ["pink", "salmon"]);
  });
});