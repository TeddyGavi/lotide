const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("$letterPositions returns an object that displays which index or indices that letter occurs within given string", () => {
  it("returns an object with the letter as the key and the indices are the values", () => {
    assert.deepEqual(letterPositions("lighthouse in the house"),
      {
        l: [0],
        i: [1, 11],
        g: [2],
        h: [3, 5, 15, 18],
        t: [4, 14],
        o: [6, 19],
        u: [7, 20],
        s: [8, 21],
        e: [9, 16, 22],
        n: [12]
      });
  });
  it("returns an object with the letter as the key and the indices are the values", () => {
    assert.deepEqual(letterPositions("Billy Biblyz likes to love piZZa"),
      {
        B: [ 0, 6 ],
        i: [ 1, 7, 14, 28 ],
        l: [ 2, 3, 9, 13, 22 ],
        y: [ 4, 10 ],
        b: [ 8 ],
        z: [ 11 ],
        k: [ 15 ],
        e: [ 16, 25 ],
        s: [ 17 ],
        t: [ 19 ],
        o: [ 20, 23 ],
        v: [ 24 ],
        p: [ 27 ],
        Z: [ 29, 30 ],
        a: [ 31 ]
      });
  });

});
