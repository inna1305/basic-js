const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let countRepeats = 0;

  let arrS1 = s1.split("");
  let arrS2 = s2.split("");

  arrS1.forEach(e => {
    if (arrS2.includes(e)) {
      countRepeats++;
      let indexOf = arrS2.indexOf(e);
      arrS2.splice(indexOf, 1);
    }
  })
  return countRepeats;
}

module.exports = {
  getCommonCharacterCount
};
getCommonCharacterCount('aabcc', 'adcaa');
