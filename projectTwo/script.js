const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12'];

const clock = document.getElementById('clock');

function addEl(ourRotation, label, randomRotation) {

    const ticks = document.createElement('div');
    const numberEl = document.createElement('p');
    const armOne = document.createElement('div');
    const armTwo = document.createElement('div');


    ticks.style.position = 'absolute';
    ticks.style.margin = '0';
    ticks.style.left = '50%';
    ticks.style.top = '50%';

    ticks.style.width = '25px';
    ticks.style.height = '4px';
    ticks.style.backgroundColor = 'black';
    ticks.style.transform = `translate(-50%, -50%) rotate(${ourRotation}deg) translate(320px)`;

    numberEl.textContent = label;
    numberEl.style.position = 'absolute';
    numberEl.style.margin = '0';
    numberEl.style.left = '50%';
    numberEl.style.top = '50%';

    numberEl.style.fontSize = '35px';
    numberEl.style.color = 'black';
    numberEl.style.transform = `translate(-50%, -50%) rotate(${ourRotation}deg) translate(280px)`;

    armOne.style.position = 'absolute';
    armOne.style.margin = '0';
    armOne.style.left = '50%'
    armOne.style.top = '50%'
    armOne.style.width = '245px';
    armOne.style.height = '4px';
    armOne.style.backgroundColor = 'purple';

    armOne.style.transform = `rotate(${randomRotation}deg)`;



    armTwo.style.position = 'absolute';
    armTwo.style.margin = '0';
    armTwo.style.left = '50%'
    armTwo.style.top = '50%'
    armTwo.style.width = '130px';
    armTwo.style.height = '4px';
    armTwo.style.backgroundColor = 'red';

    armTwo.style.transform = `rotate(${randomRotation}deg)`;

    clock.append(numberEl, ticks, armOne, armTwo);

}

const randomRotation = Math.random() * 360;


for (let i = 0; i < 12; i = i + 1) {



    setTimeout(function(){
        addEl (i * 360/12, numbers[i], randomRotation);
    }, i * 500);


}









