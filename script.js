function articleClick(a) {
  const elemA = document.getElementById(a);
  elemA.classList.toggle('article-animation');
  return 0;
}

articleClick(0);
