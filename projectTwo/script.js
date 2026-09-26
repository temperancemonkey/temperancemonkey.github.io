function addBox(rotation, color) {

    const text = document.createElement('p');
    const letter = document.createElement('p');


    text.textContent = 'a';
    text.style.width = '250px';
    text.style.height = '250px';
    text.style.fontSize = "50vw";
    text.style.color = 'black';

    letter.textContent = 'g';
    letter.style.width = '250px';
    letter.style.height = '250px';
    letter.style.fontSize = "50vw";
    letter.style.color = 'black';


    text.style.transform = 'rotate(' + rotation + 'deg)';
    letter.style.transform = 'rotate(' + rotation + 'deg)';


    document.body.appendChild(text);
    document.body.appendChild(letter);
}

const colors = [
    'black', 'gray', 'yellow', 'brown', 'blue', 'purple',
    'pink', 'brown', 'teal', 'navy', 'maroon', 'olive',
    'lime', 'cyan', 'magenta', 'gold', 'coral', 'turquoise',
    'indigo', 'violet', 'silver'
];

let colorIndex = 0;

for (let i = 0; i < 300; i = i + 1) {

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    addBox(i * 22.5, colors[colorIndex]);
    

    colorIndex = colorIndex + 1;
}








