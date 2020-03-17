window.onload = function () {
  const f = document.getElementById('article-animation');
  document.addEventListener('click', function (ev) {
  f.style.transform = 'translateY('+(ev.clientY + 10) + 'px)';
  f.style.transform = 'translateX('+(ev.clientX + 10) + 'px)';
}, false);
};
