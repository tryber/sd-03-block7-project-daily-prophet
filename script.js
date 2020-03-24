window.onload = () => {
  const articles = document.querySelectorAll('article');
  articles.forEach((elem) => {
    elem.addEventListener('mouseover', () => {
      elem.classList.add('article-animation');
    });
    elem.addEventListener('mouseout', () => {
      elem.classList.remove('article-animation');
    });
  });
};
