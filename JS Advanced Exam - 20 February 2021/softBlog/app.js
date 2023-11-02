function solve() {
  const createBtn = document.querySelector("button");

  const inputCreator = document.getElementById("creator");
  const inputTitle = document.getElementById("title");
  const inputCategory = document.getElementById("category");
  const inputContent = document.getElementById("content");
  const articleSection = document.querySelectorAll("section")[1];

  createBtn.addEventListener("click", create);

  function create(event) {
    event.preventDefault();

    const creator = inputCreator.value;
    const title = inputTitle.value;
    const category = inputCategory.value;
    const content = inputContent.value;

    const articleElement = document.createElement("article");

    const h1Title = document.createElement("h1");
    h1Title.textContent = title;

    const pCategory = document.createElement("p");
    pCategory.textContent = `Category:`;

    const strongCategory = document.createElement("strong");
    strongCategory.textContent = category;

    const pCreator = document.createElement("p");
    pCreator.textContent = "Creator:";

    const strongCreator = document.createElement("strong");
    strongCreator.textContent = creator;

    const pContent = document.createElement("p");
    pContent.textContent = content;

    const divButtons = document.createElement("div");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    const archiveBtn = document.createElement("button");
    archiveBtn.textContent = "archive";

    divButtons.classList.add("buttons");
    deleteBtn.classList.add("btn", "delete");
    archiveBtn.classList.add("btn", "archive");
    divButtons.appendChild(deleteBtn);
    divButtons.appendChild(archiveBtn);

    archiveBtn.addEventListener("click", archive);
    function archive() {
      articleElement.remove();

      const olList = document.querySelector("ol");

      const liArchive = document.createElement("li");
      liArchive.textContent = title;
      olList.appendChild(liArchive);

      const titles = Array.from(document.querySelectorAll("li"));
      titles
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach((node) => olList.appendChild(node));
    }

    deleteBtn.addEventListener("click", deleteFunction);

    function deleteFunction() {
      articleElement.remove();
    }

    articleElement.appendChild(h1Title);
    articleElement.appendChild(pCategory);
    articleElement.appendChild(strongCategory);
    articleElement.appendChild(pCreator);
    articleElement.appendChild(strongCreator);
    articleElement.appendChild(pContent);
    articleElement.appendChild(divButtons);
    articleSection.appendChild(articleElement);
  }
}
