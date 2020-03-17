window.onload = () => {
  const artigo = document.getElementsByTagName('article')[0];
  artigo.addEventListener('click', () => artigo.classList.contains('article-animation') ? artigo.classList.remove('article-animation') : artigo.classList.add('article-animation'));
};
