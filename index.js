// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
    if (destination < 42) {
      return 42 - destination;
    }
    return destination - 42;
  }
  
  function distanceFromHqInFeet(destination) {
    return distanceFromHqInBlocks(destination) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    if (destination < start) {
      return (start - destination) * 264;
    }
    return (destination - start) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance > 2500) {
      return "cannot travel that far";
    } else if (distance > 2000) {
      return 25;
    } else if (distance > 400 ) {
      return (distance - 400) * 0.02;
    } else if (distance <= 400) {
      return 0;
    } else {
      console.log("Wrong Input");
    }
  }