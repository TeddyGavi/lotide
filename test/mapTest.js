const assert = require("chai").assert;
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["The", "quick", "brown", "fox", "jumped", "over", "the","lazy", "dog"];


// assertArraysEqual(map(words2, word => word[0]), ["T", "q", "b", "f", "j", "o", "t", "l", "d"]);
// assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);

describe("#map this is an attempt to build our own map function, the use is somewhat limited based on the callback however", () => {
  it("returns the first element of an array given the callback ele[0]", () => {
    assert.deepEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
  });

  it("returns the second letter of each word give the callback ele[1]", () => {
    assert.deepEqual(map(words2, word => word[1]), ["h", "u", "r", "o", "u", "v", "h", "a", "o"]);
  });

  it("returns an array where each element is multiplied by 2 give ele * 2", () => {
    assert.deepEqual(map([1, 2, 3, 4], x => x * 2), [2, 4, 6, 8]);
  });
});