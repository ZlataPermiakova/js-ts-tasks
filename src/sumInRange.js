/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  const numStart = Number(start);
  const numEnd = Number(end);
  const min = Math.min(numStart, numEnd);
  const max = Math.max(numStart, numEnd);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};
