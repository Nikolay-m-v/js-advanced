"use strict";

(function main() {
  function createElements(elements) {
    const liEl = document.createElement("li");
    liEl.classList.add("story-info");

    const articleEl = document.createElement("article");

    const h4El = document.createElement("h4");
    h4El.textContent = `Name: ${elements.firstNameInput.value} ${elements.lastNameInput.value}`;

    const pAge = document.createElement("p");
    pAge.textContent = `Age : ${elements.ageInput.value}`;

    const pTitle = document.createElement("p");
    pTitle.textContent = `Title: ${elements.storyTitleInput.value}`;

    const pGenre = document.createElement("p");
    pGenre.textContent = `Genre: ${elements.genreSelector.value}`;

    const pStory = document.createElement("p");
    pStory.textContent = `${elements.storyInput.value}`;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save story";
    saveBtn.classList.add("save-btn");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit story";
    editBtn.classList.add("edit-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete story";
    deleteBtn.classList.add("delete-btn");

    publishStory(elements, {
      liEl,
      articleEl,
      h4El,
      pAge,
      pTitle,
      pGenre,
      pStory,
      saveBtn,
      editBtn,
      deleteBtn,
    });

    return {
      liEl,
      articleEl,
      h4El,
      pAge,
      pTitle,
      pGenre,
      pStory,
      saveBtn,
      editBtn,
      deleteBtn,
    };
  }

  function publishStory(elements, elementsToAppend) {
    if (
      !elements.firstNameInput.value ||
      !elements.lastNameInput.value ||
      !elements.ageInput.value ||
      !elements.storyTitleInput ||
      !elements.storyInput
    ) {
      return;
    }
    elements.previewStory.appendChild(elementsToAppend.liEl);
    elements.previewStory.appendChild(elementsToAppend.articleEl);
    elementsToAppend.articleEl.appendChild(elementsToAppend.h4El);
    elementsToAppend.articleEl.appendChild(elementsToAppend.pAge);
    elementsToAppend.articleEl.appendChild(elementsToAppend.pTitle);
    elementsToAppend.articleEl.appendChild(elementsToAppend.pStory);
    elements.previewStory.appendChild(elementsToAppend.saveBtn);
    elements.previewStory.appendChild(elementsToAppend.editBtn);
    elements.previewStory.appendChild(elementsToAppend.deleteBtn);

    elements.publishBtn.disabled = true;

    saveInput(elements);
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
    const firstNameSave = document.getElementById("first-name");
    const lastNameSave = document.getElementById("last-name");
    const ageSave = document.getElementById("age");
    const titleSave = document.getElementById("title");
    const storySave = document.getElementById("story");

    return {
      firstNameSave,
      lastNameSave,
      ageSave,
      titleSave,
      storySave,
    };
  }

  function editStory(elements) {
    elements.publishBtn.disabled = false;
    const savedInput = saveInput(elements);

    elements.firstNameInput = savedInput.firstNameSave;
    elements.lastNameInput = savedInput.lastNameSave;
    elements.ageInput = saveInput.ageSave;
    elements.storyTitleInput = saveInput.titleSave;
    elements.storyInput = saveInput.storySave;
  }

  function eventHandling(elements) {
    elements.publishBtn.addEventListener("click", () => {
      createElements(elements);
    });

    const createdElements = createElements(elements);

    createdElements.saveBtn.addEventListener("click", () => {
      saveStory(elements);
    });

    createdElements.editBtn.addEventListener("click", () => {
      editStory(elements);
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
