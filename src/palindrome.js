module.exports.palindrome = function palindrome(TestUtils) {
  return function (str) {
    const s = String(str)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');

    return TestUtils.isPalindrome.call({ str: s });
  };
};
