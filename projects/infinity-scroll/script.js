const postContainer = document.getElementById("post-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 3;
let page = 1;

async function getPosts() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();
  return data;
}

async function showPosts() {
  const posts = await getPosts();

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `
    <div class="post">
        <div class="number">${post.id}</div>
        <div class="post-info">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">
            ${post.body}
          </p>
        </div>
      </div>
      `;
    postContainer.appendChild(postElement);
  });
}

function showLoading() {
  loading.classList.add("show");

  setTimeout(() => {
    loading.classList.remove("show");

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

showPosts();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

function filterPosts(event) {
  const term = event.target.value.toUpperCase();
  const posts = document.querySelectorAll(".post");

  posts.forEach((post) => {
    const title = post.querySelector(".post-title").innerText.toUpperCase();
    const body = post.querySelector(".post-body").innerText.toUpperCase();

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = "flex";
    } else {
      post.style.display = "none";
    }
  });
}

filter.addEventListener("input", filterPosts);
