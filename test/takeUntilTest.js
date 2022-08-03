const assert = require("chai").assert;
const takeUntil = require("../takeUntil");


describe("#takeUntil this function that takes an array and a callback. Pushes all the elements to a new array until the given callback requirement is met", () => {
  it("returns '[1, 2, 5, 7, 2]' from [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });

  it("returns '['the']' from ['the', 'end', 'is', 42]", () => {
    assert.deepEqual(takeUntil(['the', 'end', 'is', 42], x => x === 'end'), ['the']);
  });

  it("returns the correct array up to the ',' given ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood']", () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), ["I've", "been", "to", "Hollywood",]);
  });
  
});