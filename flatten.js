const flattenLoop = (oneNestedArray) => {
  const flattened = [];
  for (const ele of oneNestedArray) {
    if (!Array.isArray(ele)) {
      flattened.push(ele);
    } else if (Array.isArray(ele)) {
      flattened.push(...ele);
    }
  }
  return flattened;
};

/*
<--Working here on different methods, for the case of lotide I will omit these via comments-->
<--I did speak to a mentor about a couple of these, I can't claim they are entirely my own solutions as I needed help with the reduce and concat methods -->

const flattenReduce = (oneLevelNesting) => {
  const flattened = oneLevelNesting.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return [...acc, ...item];
    } else {
      return [...acc, item];
    }
  },[]);
  return flattened;
};

const flattenConcat = (nested) => {
  const flattened = nested.reduce((acc, ele) => {
    return acc.concat(ele);
  },[]);
  return flattened;
};

*/



module.exports = flattenLoop;