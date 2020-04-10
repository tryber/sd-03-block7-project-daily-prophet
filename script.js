const artOne = document.getElementById('art-1');
const artTwo = document.getElementById('art-2');
const artTree = document.getElementById('art-3');

const one = () => {
    artOne.style.animationPlayState = 'running';
}

const two = () => {
    artTwo.style.animationPlayState = 'running';
}

const tree = () => {
    artTree.style.animationPlayState = 'running';
}

window.onload = function () {
    artOne.addEventListener('click', one);
    artTwo.addEventListener('click', two);
    artTree.addEventListener('click', tree);
}
