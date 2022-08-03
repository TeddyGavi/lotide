//this function takes a single argument, a string, and will return a object containing { letter: [appearanceCount]}
//spaces are ignored
//must receive a string otherwise false is returned

const countLetters = (countLettersInMe) => {
  if (typeof countLettersInMe === "string") {
    const toCount = countLettersInMe.toLowerCase().replace(/\s/g, "");
    const result = {};
    for (const letter of toCount) {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
    return result;
  } else {
    return false;
  }
};

//Gords solution below!

/* const countLetters1 = function (string) {
  let results = {};
  
  for (const letter of string) {
    if (letter === ' ') {
      continue;
    } else {
      results[letter] = (results[letter] || 0) + 1;
    }
  } return results;
};

my original solution had  // result[letter] = (result[letter] || result.hasOwnProperty(letter)) + 1;
at line 14 instead of the if/else, after speaking with Gord and reviewing his solution as well as
 with some mentors I decided to change my solution to what you see here! the linter
 seems to be happier with this solution also
 */


module.exports = countLetters;