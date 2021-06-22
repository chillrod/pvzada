const App = document.getElementById('root');

const btn = document.createElement('button')
const img = document.createElement('img');
const imgText = document.createElement('img');
const audio = new Audio('./audio.ogg');

App.appendChild(btn);
App.appendChild(img);
App.appendChild(imgText);
btn.innerText = 'Clique aqui';
img.src = './pv.png';
imgText.src = './font.gif';

img.className = 'notVisible'
imgText.className = 'notVisible';

const returnQuestion = () => {
    img.className = 'visible'
    imgText.className = 'visible-text'
    btn.innerText = 'Ai que DD'
    audio.play();
}

btn.addEventListener('click', returnQuestion)