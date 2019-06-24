// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - 42);
}

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
}

function distanceTravelledInFeet(pickup, end) {
  return Math.abs(pickup-end) * 264;
}
