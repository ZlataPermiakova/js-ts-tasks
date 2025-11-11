module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  if (arr.length === 0) {
    return [];
  }
  let maximalSequence = [arr[0]];
  let currentSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentSequence.push(arr[i]);
    } else {
      if (currentSequence.length > maximalSequence.length) {
        maximalSequence = currentSequence;
      }
      currentSequence = [arr[i]];
    }
  }
  if (currentSequence.length > maximalSequence.length) {
    maximalSequence = currentSequence;
  }

  return maximalSequence;
};
