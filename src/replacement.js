module.exports.replacement = function replacement(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const absNum = Math.abs(num);
    const numStringLength = String(absNum).length;

    let replacementValue;

    if (numStringLength === 1) {
      replacementValue = 1;
    } else if (numStringLength === 2) {
      replacementValue = 2;
    } else if (numStringLength === 3) {
      replacementValue = 3;
    } else {
      replacementValue = 4;
    }
    result.push(replacementValue);
  }
  return result;
};
