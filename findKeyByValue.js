//this function takes two arguments, an object and a value of that object
//the corresponding key of that value if returned

const findKeyByValue = (object, value) => {
  for (const title in object) {
    if (value === object[title]) {
      return title;
    }
  }
};


module.exports = findKeyByValue;