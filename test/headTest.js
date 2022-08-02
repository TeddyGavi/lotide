const head = require("../head");
const assert = require("chai").assert;

describe("#head", () => {
  it("return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 1 for [1, 2]", () => {
    assert.strictEqual(head([1]), 1);
  });

  it("returns 19 for [19, 2, 6, 5, 3, 2]", () => {
    assert.strictEqual(head([19, 2, 6, 5, 3, 2]), 19);
  });

});