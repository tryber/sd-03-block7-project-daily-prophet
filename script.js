function aumentarArtigos() {
  const articleAnimation = document.querySelectorAll('.article-animation');
  for (let i = 0; i < articleAnimation.length; i += 1) {
    articleAnimation[i].addEventListener('click', () => {
      articleAnimation[i].style.animationPlayState = 'running'
    });
  }
}

aumentarArtigos();
