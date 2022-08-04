const { assert } = require("chai");
const countLetters = require("../countLetters");


describe("#countLetters: The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.", () => {
  it("returns an object with the proper count. 'LHL' => {l: 2, h: 1}", () => {
    assert.deepEqual(countLetters("LHL"), {l: 2, h: 1});
  });

  it("returns an object with the proper count. 'lighthouse in the house' => {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1,}", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1});
  });

  it("returns false if input is anything other than a string", () => {
    assert.isFalse(countLetters(8902));
  });

  it("returns false if input is anything other than a string", () => {
    assert.isFalse(countLetters([4, 4, "they"]));
  });

});