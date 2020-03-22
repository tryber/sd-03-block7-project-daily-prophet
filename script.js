window.onload = () => {
    const artigos = document.querySelectorAll('.article-animation');
    for (let i = 0; i < artigos.length; i += 1) {
        let artigo = document.querySelectorAll('.article-animation')[i];
        artigo.addEventListener('click', () => artigo.style.animationPlayState = 'running');
    }
}
