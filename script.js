window.onload = function () {
  articleDOM = document.getElementsByClassName('article-animation')[0];


  articleDOM.addEventListener('click', function () {
    articleDOM.style.animationName = 'article-grow';
  });

  articleDOM.addEventListener('mouseout', function () {
    articleDOM.style.animationName = '';
  });
}
