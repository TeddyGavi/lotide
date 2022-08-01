const chai = require('chai');
const eqObjectsRecursion = require('.');
const expect = chai.expect;

describe("#Proving objects are equal with recursion, ie, nested objects", () => {

  it("should return true given one level of nested objects", () => {
    expect(eqObjectsRecursion({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).to.be.true;
  });

  it("should return false given one level of nested objects that aren't equal", () => {
    expect(eqObjectsRecursion({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })).to.be.false;
  });

  it("should return true given more levels of nesting that are equal", () => {
    expect(eqObjectsRecursion({ a: { z: 1, y: { w: 3 }, }, b: 2 }, { a: { z: 1, y: { w: 3 }, }, b: 2 })).to.be.true;
  });

  it("should return false given nested objects that aren't equal", () => {
    expect(eqObjectsRecursion({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })).to.be.false;
  });

  it("should still return true when passed an object with equal arrays as the value", () => {
    expect(eqObjectsRecursion({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" })).to.be.true;
  });


});