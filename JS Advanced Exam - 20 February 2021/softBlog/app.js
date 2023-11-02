function solve() {
  const createBtn = document.querySelector("button");

  const inputCreator = document.getElementById("creator");
  const inputTitle = document.getElementById("title");
  const inputCategory = document.getElementById("category");
  const inputContent = document.getElementById("content");
  const articleSection = document.querySelector("section");

  createBtn.addEventListener("click", create);

  function create(event) {
    event.preventDefault;

    const creator = inputCreator.value;
    const title = inputTitle.value;
    const category = inputCategory.value;
    const content = inputContent.value;

    const articleElement = document.createElement("article");

    const h1Title = document.createElement("h1");
    h1Title.textContent = title;

    const pElement = document.createElement("p");
    pElement.textContent = `Category:`;

    const strongCategory = document.createElement("strong");
    strongCategory.textContent = category;

    const pCreator = document.createElement("p");
    pCreator.textContent = "Creator:";

    const strongCreator = document.createElement("strong");
    strongCreator.textContent = creator;

    const pContent = document.createElement("p");
    pContent.textContent = "lorem*10  ";

    articleSection.appendChild(articleElement);
    articleSection.appendChild(h1Title);
  }
}
