

const toggle = document.querySelector('.header');

toggle.addEventListener('click', toggleBackground);

function toggleBackground() {

    const body = document.body;
    document.body.classList.toggle('dark');

}

// ROTATE MECHANISM

// const spin = document.getElementById('myButton');
// const myContainer = document.querySelector('.container');

// let currentRotation = 0;

// spin.addEventListener('click', () => {
//     currentRotation += 90;

//     myContainer.style.rotate = `${currentRotation}deg`;
// });


// const myContainer = document.querySelector('.container');

// let currentRotation = 0;

// function rotate() {

//     currentRotation += 90;
//     myContainer.style.rotate = `${currentRotation}deg`;

// };

document.addEventListener('DOMContentLoaded', () => {

    const myContainer = document.querySelector('.container');
    const randomRotation = Math.random() * 360;
    
    myContainer.style.transform = `rotate(${randomRotation}deg)`;

});












