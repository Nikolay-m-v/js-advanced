bwindow.addEventListener("load", solve);

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

    const li = document.createElement("li");
    li.className = "rpost";
    li.innerHTML = `<article>
    <h4>${title}</h4>
    <p>Category: ${category}</p>
    <p>Content: ${content}</p>
    </article>
    <button class="action-btn edit>Edit</button>
    <button class="action-btn approve>Aprove</button>`;

    lists.review.appendChild(li);

    inputs.title.value = "";
    inputs.content.value = "";
    inputs.category.value = "";

    const editBtn = li.querySelector(".edit");
    const approveBtn = li.querySelector(".approve");
    editBtn.addEventListener("click", edit);
    approveBtn.addEventListener("click", edit);

    function edit() {
      inputs.title.value = title;
      inputs.content.value = value;
      inputs.category.value = category;
    }
  }
}
