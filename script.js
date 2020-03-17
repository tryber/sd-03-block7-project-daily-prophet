const MAIN = document.getElementsByClassName('main')[0];
const LEFT = document.getElementsByClassName('left-content')[0];
const RIGHT = document.getElementsByClassName('right-content')[0];
const SIDE = document.getElementsByClassName('side-bar')[0];

MAIN.addEventListener('click',function () {
  MAIN.className = 'article-animation';
});

LEFT.addEventListener('click',function () {
  LEFT.className = 'article-animation';
});

RIGHT.addEventListener('click',function () {
  RIGHT.className = 'article-animation';
});

SIDE.addEventListener('click',function () {
  SIDE.className = 'article-animation';
});
