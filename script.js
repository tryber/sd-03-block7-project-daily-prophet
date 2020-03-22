function grow() {
  document.getElementById('article').classList.toggle('article-animation');
}

document.getElementById('article').addEventListener('click', grow);
