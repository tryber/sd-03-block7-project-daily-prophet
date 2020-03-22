const artAlvo = document.querySelector('.article-animation');
artAlvo.addEventListener('click', () => {
  if (artAlvo.style.animationName === 'article-grow') {
    artAlvo.style.animationName = 'unset';
  } else {
    artAlvo.style.animationName = 'article-grow';
  }
});
