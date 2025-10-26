const articles = [
  {
    id: 1,
    title: "The Midnight Library",
    date: "October 10, 2025",
    description: "A thought-provoking journey through life’s choices and regrets, Matt Haig’s *The Midnight Library* explores what could have been.",
    imgSrc: "images/midnight-library.jpg",
    imgAlt: "Book cover of The Midnight Library",
    ages: "14+",
    genre: "Fiction",
    stars: "⭐⭐⭐⭐"
  },
  {
    id: 2,
    title: "Project Hail Mary",
    date: "October 15, 2025",
    description: "Andy Weir delivers another gripping sci-fi masterpiece, balancing scientific wonder with emotional storytelling.",
    imgSrc: "images/project-hail-mary.jpg",
    imgAlt: "Book cover of Project Hail Mary",
    ages: "14+",
    genre: "Science Fiction",
    stars: "⭐⭐⭐⭐⭐"
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐⭐"
  }
];

const container = document.querySelector("#articles-container");

function displayArticles() {
  container.innerHTML = "";

  articles.forEach(item => {
    const article = document.createElement("article");
    article.classList.add("blog-article");

    const template = `
      <div class="details">
        <p class="date">${item.date}</p>
        <p class="metadata">Ages: ${item.ages} | Genre: ${item.genre} | Rating: ${item.stars}</p>
      </div>
      <div class="content">
        <h2>${item.title}</h2>
        <img src="${item.imgSrc}" alt="${item.imgAlt}">
        <p>${item.description}</p>
      </div>
    `;

    article.innerHTML = template;
    container.appendChild(article);
  });
}

displayArticles();
