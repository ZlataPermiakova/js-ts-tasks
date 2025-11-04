/**
 * Given k (number). Evaluate the expression: 4 * (2k - 1)
 * @param {number} k - number
 * @returns {number}
 */
module.exports.evalExpr = function evalExpr(k) {
  let twoK = 2 * k;
  let expression = twoK - 1;
  let result = 4 * expression;
  return result;
};
