function grow () {
  document.getElementsByClassName('article-animation')[0].style.animationName = 'article-grow';
  document.getElementsByClassName('article-animation')[0].style.animationDuration = '4s';
  document.getElementsByClassName('article-animation')[0].style.animationTimingFunction = 'linear';
}

document.getElementById('article').addEventListener('click', grow);