module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  const distanceX = secondPoint.X - firstPoint.X;
  const distanceY = secondPoint.Y - firstPoint.Y;

  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  return parseFloat(distance.toFixed(2));
};
