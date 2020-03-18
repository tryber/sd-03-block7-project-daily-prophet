function fontSize(target) {
  target.sytle.fontSize = '30px';
}

document.querySelector('.article-animation').addEventListener('click', (e) => {
  fontSize(e.target);
});
