import css from './style.css';

const $btn = document.getElementById('btn');

const colors = ['chocolate', 'brown', 'tomato', 'teal', 'violet'];

const randomIndex = (longitud) => Math.floor(Math.random() * longitud - 0) + 0;

const changeBackground = (randomIndex) => document.body.style.backgroundColor = colors[randomIndex];

const change = () => {
    let alt = randomIndex(colors.length);
    let background = document.body.style.backgroundColor;
    let instance = changeBackground(alt);
    if(background == instance) change();
}

$btn.addEventListener('click', change);