/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  if (typeof n !== 'number');

  let absoluteN = Math.abs(n);
  let nAsString = String(absoluteN);
  let sumOfDigits = 0;

  for (let i = 0; i < nAsString.length; i++) {
    let digitChar = nAsString[i];
    let digit = Number(digitChar);
    sumOfDigits = sumOfDigits + digit;
  }
  return sumOfDigits;
};
