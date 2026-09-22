function addBox (ourRotation, ourColor) {

    const box = document.createElement('div');
    box.style.width = '150px';
    box.style.height = '150px';
    box.style.borderRadius = '50%';
    box.style.border = 'solid, 80px, black';
    box.textContent = '8';
    box.style.textAlign = 'center';
    box.style.backgroundColor = ourColor;
    box.style.transform = `rotate(${ourRotation}deg)`;
    document.body.appendChild(box);

};

const colors = ['gold','blue', 'pink', 'indianred', 'silver', 'turqoise', 'yellow', 'brown', 'coral', 'magenta', 'violet'];

let colorIndex = 0;


for (let boxIndex = 0; boxIndex < 300; boxIndex++) {
    while (colorIndex >= colors.length){
        colorIndex = 0;
    }

    const currentColor = colors[colorIndex]

    setTimeout(function() {
        addBox(boxIndex * 22.5, currentColor);
    }, boxIndex * 1000);

    colorIndex++;
}

// for (let boxIndex = 0; boxIndex < 300; boxIndex++) {

//     addBox(boxIndex * 22.5);

// };





// function greetUser (username) {

//     console.log('Hello ' + username);

// };

// greetUser('Temperance');






// ${`this is a template shortcut for code abvoe`}

// function faveGame(game) {

//     console.log(`My favourite game is ${game}`)

// };

// faveGame('Minecraft');





// function myCar(brand, color) {

//     console.log(`${brand} is ${color}`);

// };

// myCar('Toyota', 'red');


// TIMEOUT FUNCTION

//call bak

// function sayHello() {

//     console.log('hello');

// };

// setTimeout(sayHello, 2000);

//anonymous

// setTimeout(function(){
//     console.log('Hello');
// }, 2000);












