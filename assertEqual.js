const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log("🖖🖖🖖 Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log("🤢🤢🤢Assertion Failed: " + actual + " !== " + expected);
  }
//Using the ternary op is better?
//  return ((actual === expected)  ? console.log("Assertion Passed: " + actual + " === " + expected) : console.log("Assertion Failed: " + actual + " !== " + expected))
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("Lighthouse", "Lighthouse");