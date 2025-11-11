module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maximalCommonSubstring = '';
  if (str1.length === 0 || str2.length === 0) {
    return '';
  }
  for (let i = 0; i < str1.length; i++) {
    for (let j = i; j < str1.length; j++) {
      const sub = str1.substring(i, j + 1);
      if (str2.includes(sub)) {
        if (sub.length > maximalCommonSubstring.length) {
          maximalCommonSubstring = sub;
        }
      }
    }
  }

  return maximalCommonSubstring;
};
