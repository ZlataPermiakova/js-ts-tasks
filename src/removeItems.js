module.exports.removeItems = function removeItems(arr, value) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
