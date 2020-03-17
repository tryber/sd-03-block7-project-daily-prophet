window.onload = function () {
  article = document.getElementsByClassName('article-animation')[0];
  console.log(article);

  article.addEventListener('click', function () {
    article.style.animationName = 'article-grow';
  });

  // articleDOM.addEventListener('mouseout', function () {
  //   articleDOM.style.animationName = '';
  // });
}
