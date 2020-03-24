window.onload = () => {
  const articles = document.querySelectorAll('article');
  articles.forEach((elem) => {
    elem.addEventListener('click', () => {
      elem.classList.toggle('article-animation');
    });
  });
};
