const clicado = document.querySelector('.mapa');
clicado.addEventListener('click', (event) => { clicado.classList.toggle('mapa-onclick'); });

/* const artigo = document.querySelector('.pArtigo');
artigo.addEventListener('click', _ =>
artigo.classList.toggle('article-animation')); */

function articleClick() {
let artigo = document.querySelector('.pArtigo');
artigo.classList.toggle('article.animation');
}
