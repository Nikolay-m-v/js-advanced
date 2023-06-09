"use strict";

function roadRadar(speed, area) {
  let motorWayLimit = 130;
  let interstateLimit = 90;
  let cityLimit = 50;
  let residentialAreaLimit = 20;
  let speedLimit = 0;
  let difference = 0;
  let speedStatus = "";

  if (area === "city") {
    speedLimit = cityLimit;
    if (speed <= speedLimit) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      difference = speed - speedLimit;
      if (difference > 0 && difference <= 20) {
        speedStatus = "speeding";
      } else if (difference > 20 && difference <= 40) {
        speedStatus = "excessive speeding";
      } else {
        speedStatus = "reckless driving";
      }
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`
      );
    }
  } else if (area === "residential") {
    speedLimit = residentialAreaLimit;
    if (speed <= speedLimit) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      difference = speed - speedLimit;
      if (difference > 0 && difference <= 20) {
        speedStatus = "speeding";
      } else if (difference > 20 && difference <= 40) {
        speedStatus = "excessive speeding";
      } else {
        speedStatus = "reckless driving";
      }
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`
      );
    }
  } else if (area === "motorway") {
    speedLimit = motorWayLimit;
    if (speed <= speedLimit) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      difference = speed - speedLimit;
      if (difference > 0 && difference <= 20) {
        speedStatus = "speeding";
      } else if (difference > 20 && difference <= 40) {
        speedStatus = "excessive speeding";
      } else {
        speedStatus = "reckless driving";
      }
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`
      );
    }
  } else if (area === "interstate") {
    speedLimit = interstateLimit;
    if (speed <= speedLimit) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
      difference = speed - speedLimit;
      if (difference > 0 && difference <= 20) {
        speedStatus = "speeding";
      } else if (difference > 20 && difference <= 40) {
        speedStatus = "excessive speeding";
      } else {
        speedStatus = "reckless driving";
      }
      console.log(
        `The speed is ${
          speed - speedLimit
        } km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`
      );
    }
  }
}

roadRadar(40, "city");
roadRadar(21, "residential");
roadRadar(120, "interstate");
roadRadar(200, "motorway");
