window.addEventListener("load", solve);

function solve() {
  const inputs = {
    title: document.getElementById("post-title"),
    category: document.getElementById("post-category"),
    content: document.getElementById("post-content"),
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
    li.innerHTML = `<article> <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${content}</p>
    </article>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn approve">Approve</button> `;

    lists.review.appendChild(li);

    inputs.title.value = "";
    inputs.category.value = "";
    inputs.content.value = "";

    const editBtn = li.querySelector(".edit");
    const approveBtn = li.querySelector(".approve");

    editBtn.addEventListener("click", edit);
    approveBtn.addEventListener("click", approve);

    function edit() {
      inputs.title.value = title;
      inputs.category.value = category;
      inputs.content.value = content;

      li.remove();
    }

    function approve() {
      lists.published.appendChild(li);

      editBtn.remove();
      approveBtn.remove();
    }
  }

  function clear() {
    lists.published.innerHTML = "";
  }
}
