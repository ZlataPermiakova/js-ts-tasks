module.exports.partialSum = function partialSum(arr) {
  const result = [];

  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    result.push(currentSum);
  }
  return result;
};
