// const button = document.getElementById('header');

// button.addEventListener('click', toggleBackground);

// function toggleBackground() {

//     const body = document.body;

//     if (body.style.backgroundColor === 'white') {
//         body.style.backgroundColor = 'yellow)';
//     } else {
//         body.style.backgroundColor = 'white)';
//     }
// }

const toggle = document.querySelector('.header');

toggle.addEventListener('click', toggleBackground);

function toggleBackground() {

    const body = document.body;
    document.body.classList.toggle('dark');

}

// ROTATE MECHANISM

const spin = document.getElementById('myButton');
const myContainer = document.querySelector('.container');

let currentRotation = 0;

spin.addEventListener('click', () => {
    currentRotation += 90;

    myContainer.style.rotate = `${currentRotation}deg`;
});

// function rotate(){
//     document.querySelector('.container').style.rotate = '90deg';
// }





