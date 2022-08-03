//this is the solution to the original problem
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//this function returns a new object populated with only the objects that pass the test, it is essentailly filtering
const findKeyAndReturnsAnObj = function(object, callback) {
  const result = {};
  for (const key in object) {
    if (callback(object[key])) {
      result[key] = object[key];
    }
  }
  return result;
};


//i exported this as a library, must use dot notation to access
module.exports = {
  findKey: findKey,
  findKeyAndReturnsAnObj: findKeyAndReturnsAnObj,
};