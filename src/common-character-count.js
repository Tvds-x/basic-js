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
  let result = 0;
  let checked = [];
  let sum1 = 0;
  let sum2 = 0;

  for (char of s1){
    if (!checked.includes(char) && s2.includes(char)){
      checked.push(char);
      sum1 = 0;
      sum2 = 0;
      for (el of s1){
        if (el === char){
          sum1++;
        }
      }
      for (el of s2){
        if (el === char){
          sum2++;
        }
      }

      result += Math.min(sum1,sum2);
    }
  }

  return result;

}

module.exports = {
  getCommonCharacterCount
};
