
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12'];


function addLetter (ourRotation, label) {

    const numberEl = document.createElement('p');
    const ticks = document.createElement('p');


    ticks.style.width = '35px';
    ticks.style.height = '5px';
    ticks.style.backgroundColor = 'black';

    ticks.style.position = 'absolute';
    ticks.style.top = '250px';

    numberEl.textContent = label;
    numberEl.style.fontSize = '50px';
    numberEl.style.color = 'black';

    numberEl.style.position = 'absolute';
    numberEl.style.top = '250px';




    ticks.style.transform = `rotate(${ourRotation}deg) translate(300px)`;
    numberEl.style.transform = `rotate(${ourRotation}deg) translate(250px)`;
    

    document.body.appendChild(ticks);
    document.body.appendChild(numberEl);

};

for (let i = 0; i < 12; i = i + 1) {

    addLetter (i * (360/12), numbers[i]);

};






