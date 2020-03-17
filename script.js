const article = document.getElementById('main-article');
article.addEventListener('click', () => {
  document.getElementById('main-article').classList.add('article-animation');
});

const headertitle = document.getElementById('header-title');
headertitle.addEventListener('dblclick', () => {
  headertitle.classList.add('transfo');
});
