const assert = require("chai").assert
const findLib = require("../findKey");


const starObject = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe("#findKey will return the key which passes the required callback test \n #findKeyAndReturnsAnObj will also return any objects that pass the test. See the Documentation for clarification", () => {
  
  it("returns true if the object key returned passes the callback test", () => {
    assert.equal(findLib.findKey(starObject, x => x.stars === 2), "noma");
  })

  it("returns true if the object key returned passes the callback test", () => {
    assert.equal(findLib.findKey(starObject, x => x.stars === 3), "Akaleri");
  })

  it("#findKeyandReturnsanObj returns a object constructed of properties that pass the callback test", () => {
    assert.deepEqual(findLib.findKeyAndReturnsAnObj(starObject, x => x.stars === 2), { noma: { stars: 2 }, Ora: { stars: 2 } } )
  })

  it("#findKeyandReturnsanObj returns a object constructed of properties that pass the callback test", () => {
    assert.deepEqual(findLib.findKeyAndReturnsAnObj(starObject, x => x.stars === 3), { Akaleri: { stars: 3 }, elBulli: { stars: 3}, Akelarre: { stars: 3 } } );
  })

})