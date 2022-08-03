const findKeyByValue = (object, value) => {
  for (const title in object) {
    if (value === object[title]) {
      return title;
    }
  }
};


module.exports = findKeyByValue;