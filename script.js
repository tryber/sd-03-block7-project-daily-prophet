window.onload = () => {
  const artigo = document.getElementsByTagName('article')[0];
  artigo.addEventListener('click', () => artigo.classList.add('article-animation'));
};
