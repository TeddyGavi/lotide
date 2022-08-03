const assert = require("chai").assert;
const without = require("../without");

describe("#without takes two arguments, source, itemsToRemove, and returns an array without a specific element from the array ", () => {
  it("returns [2, 3] given [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  it("returns [] given ['lighthouse'], ['lighthouse']", () => {
    assert.deepEqual(without(['lighthouse'], ['lighthouse']), []);
  });
  
  it("returns ['1', '2'] given ['1', '2', '3'], [1, 2, '3']", () => {
    assert.deepEqual(without(['1', '2', '3'], [1, 2, '3']), ['1', '2']);
  });
});