const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // console.log(matrix);
  result = 0;
  for (el of matrix){
    for (cat of el){
      if (cat === '^^'){
        result++
      }
    }
  }
  return result;
}

countCats([
   [0, 1, '^^'],
   [0, '^^', 2],
   ['^^', 1, 2]
  ])

module.exports = {
  countCats
};
