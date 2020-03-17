window.onload = () => {
  const artigo = document.getElementsByTagName('article')[0];
  artigo.addEventListener('click', () => {
    if(artigo.classList.contains('article-animation')){
      artigo.classList.remove('article-animation')
    }else{
      artigo.classList.add('article-animation')
    };
  });
};
