const article = document.getElementById('main-article');
article.addEventListener('click', () => {
  document.getElementById('main-article').classList.add('article-animation');
});

const header_title = document.getElementById('header-title');
header_title.addEventListener('dblclick', () => {
  header_title.classList.add('transfo');
});
