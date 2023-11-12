"use strict";

(function main() {
  let savedInputValues;

  function createElements(elements) {
    const liEl = document.createElement("li");
    liEl.classList.add("story-info");

    const articleEl = document.createElement("article");

    const h4El = document.createElement("h4");
    h4El.textContent = `Name: ${elements.firstNameInput.value} ${elements.lastNameInput.value}`;

    const pAgeEl = document.createElement("p");
    pAgeEl.textContent = `Age : ${elements.ageInput.value}`;

    const pTitleEl = document.createElement("p");
    pTitleEl.textContent = `Title: ${elements.storyTitleInput.value}`;

    const pGenreEl = document.createElement("p");
    pGenreEl.textContent = `Genre: ${elements.genreSelector.value}`;

    const pStoryEl = document.createElement("p");
    pStoryEl.textContent = `${elements.storyInput.value}`;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save story";
    saveBtn.classList.add("save-btn");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit story";
    editBtn.classList.add("edit-btn");

    editBtn.addEventListener("click", () => {
      saveInput(elements);
      editStory(elements);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete story";
    deleteBtn.classList.add("delete-btn");

    publishStory(elements, {
      liEl,
      articleEl,
      h4El,
      pAgeEl,
      pTitleEl,
      pGenreEl,
      pStoryEl,
      saveBtn,
      editBtn,
      deleteBtn,
    });

    return {
      liEl,
      articleEl,
      h4El,
      pAgeEl,
      pTitleEl,
      pGenreEl,
      pStoryEl,
      saveBtn,
      editBtn,
      deleteBtn,
    };
  }

  function publishStory(elements, elementsToAppend) {
    savedInputValues = saveInput(elements);
    console.log(savedInputValues);

    if (
      !elements.firstNameInput.value ||
      !elements.lastNameInput.value ||
      !elements.ageInput.value ||
      !elements.storyTitleInput.value ||
      !elements.storyInput.value
    ) {
      return;
    }

    elements.previewStory.appendChild(elementsToAppend.liEl);
    elements.previewStory.appendChild(elementsToAppend.articleEl);
    elementsToAppend.articleEl.appendChild(elementsToAppend.h4El);
    elementsToAppend.articleEl.appendChild(elementsToAppend.pAgeEl);
    elementsToAppend.articleEl.appendChild(elementsToAppend.pTitleEl);
    elementsToAppend.articleEl.appendChild(elementsToAppend.pStoryEl);
    elements.previewStory.appendChild(elementsToAppend.saveBtn);
    elements.previewStory.appendChild(elementsToAppend.editBtn);
    elements.previewStory.appendChild(elementsToAppend.deleteBtn);

    elements.publishBtn.disabled = true;

    clearInput(elements);
  }

  function clearInput(elements) {
    elements.firstNameInput.value = "";
    elements.lastNameInput.value = "";
    elements.ageInput.value = "";
    elements.storyTitleInput.value = "";
    elements.storyInput.value = "";
  }

  function saveInput(elements) {
    return {
      firstNameSave: elements.firstNameInput.value,
      lastNameSave: elements.lastNameInput.value,
      ageSave: elements.ageInput.value,
      titleSave: elements.storyTitleInput.value,
      storySave: elements.storyInput.value,
    };
  }

  function editStory(elements) {
    elements.publishBtn.disabled = false;

    elements.firstNameInput.value = savedInputValues.firstNameSave;
    elements.lastNameInput.value = savedInputValues.lastNameSave;
    elements.ageInput.value = savedInputValues.ageSave;
    elements.storyTitleInput.value = savedInputValues.titleSave;
    elements.storyInput.value = savedInputValues.storySave;
  }

  function eventHandling(elements) {
    elements.publishBtn.addEventListener("click", () => {
      createElements(elements);
    });
  }

  function getElements() {
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const ageInput = document.getElementById("age");
    const storyTitleInput = document.getElementById("story-title");
    const publishBtn = document.getElementById("form-btn");
    const previewStory = document.getElementById("preview-list");
    const genreSelector = document.getElementById("genre");
    const storyInput = document.getElementById("story");

    return {
      firstNameInput,
      lastNameInput,
      ageInput,
      storyTitleInput,
      publishBtn,
      previewStory,
      genreSelector,
      storyInput,
    };
  }

  eventHandling(getElements());
})();
