window.onload = () => {
  const articles = document.querySelectorAll('article');
  articles.forEach((elem) => {
    elem.addEventListener('pointerup', () => {
      elem.classList.toggle('article-animation');
    });/*
    elem.addEventListener('pointerdown', () => {
      elem.classList.remove('article-animation');
    });*/
  });
};
