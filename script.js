document.querySelectorAll('.article-animation').forEach((e) => {
  e.addEventListener('click', () => { e.style.animationPlayState === 'running' ?
    e.style.animationPlayState = 'paused' : e.style.animationPlayState = 'running';
  });
});
/* function track() {
  const footCreate = document.createElement('div .foot');
  const trackContainer = document.querySelector('.footTrack');
  const steps = 10;
  for (let counter = 0; counter < steps; counter += 1) {
    let stepProgress = counter / steps
    step = footCreate
    step.style.marginLeft = `${window.innerWidth * counter / steps}px`;
    trackContainer.appendChild(step)
    console.log(step);
  }

}
track() */
