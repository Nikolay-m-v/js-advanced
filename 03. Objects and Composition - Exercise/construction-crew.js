"use strict";

function constructionCrew(worker) {
  if (worker.dizziness === true) {
    worker.levelOfHydrated = 0.1 * worker.weight * worker.experience;
    worker.dizziness = false;
  }
  console.log(worker);
}

constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
