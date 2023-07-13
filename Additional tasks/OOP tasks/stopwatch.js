"use strict";

function Stopwatch() {
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) {
      throw new Error("Stopwatch is already running.");
    }
    running = true;

    startTime = new Date();
  };

  this.stop = function () {
    if (!running) {
      running = false;
      endTime = new Date();
    } else {
      throw new Error("Stopwatch isnt currently running.");
    }
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
