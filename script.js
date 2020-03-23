const artigos = document.querySelectorAll('#article');

for (let i = 0; i < artigos.length; i += 1) {
  artigos[i].addEventListener('click', (ev) => {
    const teste = ev.currentTarget;
    if (teste.classList.contains('article-animation')) {
      teste.classList.remove('article-animation');
    } else {
      ev.currentTarget.classList.add('article-animation');
    }
  });
}
