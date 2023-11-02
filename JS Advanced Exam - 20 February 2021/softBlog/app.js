function solve() {
  const createBtn = document.querySelector("button");
  const creator = document.getElementById("creator");
  const title = document.getElementById("title");
  const category = document.getElementById("category");
  const articleSection = document.querySelector("section");

  createBtn.addEventListener("click", create);

  function create() {
    const articleElement = document.createElement("article");
    articleSection.appendChild(articleElement);
  }
}
