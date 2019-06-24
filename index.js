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

function calculatesFarePrice(pickup, end ) {
  let ditance = distanceTravelledInFeet(pickup, end)

  if(distance < 2000) {
    return (distance-400) * .02;
  } else if (distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
