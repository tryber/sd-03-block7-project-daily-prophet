window.onload = () => {
  const articles = document.querySelectorAll('article');
  articles.forEach((elem) => {
    elem.addEventListener('click', () => {
      let state = window.getComputedStyle(elem).animationPlayState;
      if (state === 'running') {
        elem.style.animationPlayState = 'paused';
      }
      else if (state === 'paused') {
        elem.style.animationPlayState = 'running';
      }
    });
    elem.addEventListener('click', () => {
      elem.addEventListener('click', () => {
        elem.classList.toggle('article-animation');
      })
    });
  });
};
