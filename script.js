document.querySelectorAll('article').forEach((e) => {
  e.addEventListener('click', (event) => {
    if (event.target.parentNode.tagName === 'ARTICLE') {
      event.target.parentNode.classList.add('article-animation');
    }
  });
});
