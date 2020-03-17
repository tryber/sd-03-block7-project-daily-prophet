window.onload = function () {
  article = document.getElementsByClassName("article-animation")[0];


  article.addEventListener("click", function(){
    article.style.animationName = "article-grow";
  })
  article.addEventListener("mouseout", function(){
    article.style.animationName = "";
  })
}
