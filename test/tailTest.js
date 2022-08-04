const { assert } = require("chai");
const tail = require("../tail");

describe("#tail", () => {
  it("return ['Lighthouse', 'Labs'] from ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns ['top', 'Lighthouse', 'Labs'] from ['bubble', 'top', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['bubble', 'top', 'Lighthouse', 'Labs']), ['top', 'Lighthouse', 'Labs']);
  });

  it("returns [1, 2, 3, 4, 5] from ['1', 1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail(['1', 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });
});