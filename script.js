const cresceArtigo = document.querySelectorAll('article-animation');

const addClasse = () => cresceArtigo.classList.add('animacao');

cresceArtigo.addEventListener('click', addClasse);
