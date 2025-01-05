const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let blockedColumns = new Set();

  for (let row of matrix) {
      for (let col = 0; col < row.length; col++) {
          if (row[col] === 0) {
              blockedColumns.add(col);
          } else if (!blockedColumns.has(col)) {
              sum += row[col];
          }
      }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
