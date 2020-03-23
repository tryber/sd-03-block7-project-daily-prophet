function articleClick(a) {
  const elemA = document.getElementById(a);
  elemA.style.animationPlayState = 'running';
}

addEventListener('click', articleClick)