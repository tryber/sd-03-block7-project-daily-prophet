function LOADED() {
  let articlesAnimated = document.querySelectorAll('.article-animation');
  for (let i = 0; i < articlesAnimated.length; i += 1) {
    articlesAnimated[i].addEventListener('click', function () {
      event.target.animationName = ' article-grow';
    });
  }
}

window.onload = LOADED();