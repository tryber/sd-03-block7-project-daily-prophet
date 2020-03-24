const article = document.querySelector('.article-animation');
const start = document.querySelector('article');

function startAnimations() {
  article.style.animationName = 'article-grow';
  article.style.animationDuration = '4s';
  article.style.animationTimingFunction = 'linear';
  article.style.animationPlayState = 'running';
}

start.addEventListener('click', function () {
  startAnimations();
});
