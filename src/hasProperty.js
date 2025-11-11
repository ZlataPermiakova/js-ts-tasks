module.exports.hasProperty = function hasProperty(object, prop) {
  if (object === null || object === undefined) {
    return false;
  }
  return prop in object;
};
