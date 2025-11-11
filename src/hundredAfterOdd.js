module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    if (arr[i] % 2 !== 0) {
      result.push(100);
    }
  }
  return result;
};
