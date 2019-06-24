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
  
}

For a distance between 400 and 2000 feet,
the price is 2 cents per foot (not including 400, which are free!).
Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
Finally, Scuber does not allow any rides over 2500 feet
the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
