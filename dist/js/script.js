'use strict';

const button = document.querySelector('.get-joke');
const joke = document.querySelector('.momma-joke');

const getJoke = () => {
    fetch('https://yomomma-api.herokuapp.com/jokes')
        .then((response) => response.json())
        .then((json) => {
            joke.innerHTML += json.value;
        });
};

button.addEventListener('click', getJoke);
