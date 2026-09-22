const button = document.getElementById('myButton');

button.addEventListener('click', toggleBackground);

function toggleBackground() {

    const body = document.body;

    // body.style.backgroundColor = 'rgb(255, 255, 131)'

    if (body.style.backgroundColor === 'rgb(238, 238, 238)') {
        body.style.backgroundColor = 'rgb(255, 255, 131)';
    } else {
        body.style.backgroundColor = 'rgb(238, 238, 238)';
    }
}