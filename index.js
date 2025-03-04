// Code your solution in this file!
function distanceFromHqInBlocks(street){
    const hqstreet = 42
    return Math.abs (street-hqstreet)
}
function distanceFromHqInFeet (street){
const hqstreet=42
const block = Math.abs (street - hqstreet)
return block * 264
}
function distanceTravelledInFeet (start, destination){
const block = Math.abs (destination-start)
return block *264 
}
function calculatesFarePrice (start, destination){
    const distanceInFeet = distanceTravelledInFeet(start, destination)
    if (distanceInFeet <= 400) {
        return 0;
      } 
       else if (distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
      }
       else if (distanceInFeet <= 2500) {
        return 25;
      } 
      else {
        return 'cannot travel that far';
      }
    }
