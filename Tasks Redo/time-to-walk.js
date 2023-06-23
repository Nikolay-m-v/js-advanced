"use strict";

function timeToWalk(steps, lengthOfStepMeters, speed) {
  let metersWalked = steps * lengthOfStepMeters;
  let speedInMeters = speed / 3.6;
  let time = metersWalked / speedInMeters;
  let rest = Math.floor(metersWalked / 500);
  let timeHour = Math.floor(time / 3600);
  let timeMin = Math.floor(time / 60);
  let timeSec = Math.floor(time - timeMin * 60);

  console.log(
    (timeHour < 10 ? "0" : "") +
      timeHour +
      ":" +
      (timeMin + rest < 10 ? "0" : "") +
      (timeMin + rest) +
      ":" +
      (timeSec < 10 ? "0" : "") +
      timeSec
  );
}

timeToWalk(4000, 0.6, 5);
