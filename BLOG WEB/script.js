const posts = [
  { title: "First Blog Post", category: "Tech", content: "Content about tech..." },
  { title: "My Travel Journey", category: "Travel", content: "Story about places I visited..." },
  { title: "Healthy Lifestyle", category: "Lifestyle", content: "Tips for daily health..." }
];

if (document.getElementById("blog-container")) {
  const container = document.getElementById("blog-container");
  posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <h2>${post.title}</h2>
      <p>Category: ${post.category}</p>
      <a href="blog.html">${"Read More"}</a>
    `;
    container.appendChild(card);
  });
}

function filterPosts(category) {
  const container = document.getElementById("blog-container");
  container.innerHTML = "";
  posts
    .filter(p => category === "All" || p.category === category)
    .forEach(post => {
      const card = document.createElement("div");
      card.className = "blog-card";
      card.innerHTML = `
        <h2>${post.title}</h2>
        <p>Category: ${post.category}</p>
        <a href="blog.html">${"Read More"}</a>
      `;
      container.appendChild(card);
    });
}

const adminForm = document.getElementById("admin-form");
if (adminForm) {
  adminForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("admin-title").value;
    const category = document.getElementById("admin-category").value;
    const content = document.getElementById("admin-content").value;

    alert("New blog post added (simulated). You can manually add it to JS array!");
    adminForm.reset();
  });
}

const commentForm = document.getElementById("comment-form");
if (commentForm) {
  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("comment-name").value;
    const comment = document.getElementById("comment-text").value;

    const commentDiv = document.createElement("div");
    commentDiv.innerHTML = `<strong>${name}</strong>: ${comment}`;
    document.getElementById("comments-list").appendChild(commentDiv);
    commentForm.reset();
  });
}