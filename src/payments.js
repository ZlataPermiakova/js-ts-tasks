module.exports.payments = function payments(TestUtils) {
  return function (income = {}, debts = {}) {
    const totalIncome = TestUtils.sumAllObjectProperties(income) || 0;
    const totalDebts = TestUtils.sumAllObjectProperties(debts) || 0;

    return totalIncome - totalDebts;
  };
};
