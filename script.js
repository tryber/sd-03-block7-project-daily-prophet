const clicado = document.querySelector('.mapa');
clicado.addEventListener('click', () => { clicado.classList.toggle('mapa-onclick'); });

/* const artigo = document.querySelector('.pArtigo');
artigo.addEventListener('click', _ =>
artigo.classList.toggle('article-animation')); */

function articleClick() {
  const artigo = document.querySelector('.pArtigo');
  artigo.classList.toggle('article.animation');
}
