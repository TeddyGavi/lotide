const { assert } = require("chai");
const eqObjects = require("../eqObjects");
const chai = require("chai").assert;


const ab = {
  a: "1",
  b: "2",
};

const ba = {
  b: "2",
  a: "1",
};

const abc = {
  a: "1",
  b: "2",
  c: "3",
};

const cd = {
  c: "1",
  d: ["2", 3]
};

const dc = {
  d: ["2", 3],
  c: "1",
};

const cd2 = {
  c: "1",
  d: ["2", 3, 4],
};
const tops = {
  a: [4, 5, 6, 6],
  b: [2, 2, 2, 2],
  c: "The House"
};
const btm = {
  a: [4, 5, 6, 6],
  c: "the house",
  b: [2, 2, 2, 2],
};

describe("#eqObjects compares two if two objects are equal (shallow)", () => {
  it("returns true if the objects are equal", () => {
    assert.isTrue(eqObjects(ab, ba));
  });

  it("returns false if the objects are not equal", () => {
    assert.isFalse(eqObjects(ab, abc));
  });

  it("returns true if the objects are not equal", () => {
    assert.isTrue(eqObjects(cd, dc));
  });

  it("returns false if the objects are not equal", () => {
    assert.isFalse(eqObjects(cd, cd2));
  });

  it("returns false if the objects are not equal", () => {
    assert.isFalse(eqObjects(tops, btm));
  });
});