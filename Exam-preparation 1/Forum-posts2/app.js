window.addEventListener("load", solve);

function solve() {
  const inputs = {
    postTitle: document.getElementById("post-title"),
    postCategory: document.getElementById("post-category"),
    postContent: document.getElementById("post-content"),
  };

  const lists = {
    review: document.getElementById("review-list"),
    published: document.getElementById("published-list"),
  };

  document.getElementById("publish-btn").addEventListener("click", publish);
  document.getElementById("clear-btn").addEventListener("click", clear);

  function publish(event) {
    event.preventDefault();

    const title = inputs.title.value;
    const category = inputs.category.value;
    const content = inputs.content.value;

    if (title === "" || category === "" || content === "") {
      return;
    }
  }
}
