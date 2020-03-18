function aumentarArtigos() {
  const articleAnimation = document.querySelectorAll('p');
  for (let i = 0; i < articleAnimation.length; i += 1) {
    articleAnimation[i].addEventListener('click', () => {
      articleAnimation[i].classList.add('article-animation');
    });
    articleAnimation[i].addEventListener('animationend', () => {
      articleAnimation[i].classList.remove('article-animation');
    });
  }
}

aumentarArtigos();
