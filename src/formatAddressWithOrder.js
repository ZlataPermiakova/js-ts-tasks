module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  const defaultOrder = ['street', 'house', 'apartment', 'city', 'postal-code', 'country'];
  const keys = Array.isArray(order) && order.length ? order : defaultOrder;

  return function (address = {}) {
    return keys
      .map(key => {
        const val = address[key];
        return val === undefined || val === null ? '' : String(val);
      })
      .join(', ');
  };
};
