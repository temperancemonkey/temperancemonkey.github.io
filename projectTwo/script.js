const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12'];

const clock = document.getElementById('clock');

function addEl(ourRotation, label) {

    const ticks = document.createElement('div');
    const numberEl = document.createElement('p');



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


    clock.append(numberEl, ticks);


}

function addArm(randomRotation) {

    const arm = document.createElement('div');

    arm.style.position = 'absolute';
    arm.style.margin = '0';
    arm.style.left = '50%'
    arm.style.top = '50%'
    arm.style.width = '220px';
    arm.style.height = '4px';
    arm.style.backgroundColor = 'black';
    
    arm.style.transformOrigin = '0 50%';
    arm.style.transform = `rotate(${randomRotation}deg) translate(15px)`;

    clock.append(arm);

}


for (let i = 0; i < 12; i = i + 1) {

    setTimeout(function(){
        addEl (i * 360/12, numbers[i]);
    }, i * 50);


}

addArm(Math.random() * 360);
addArm(Math.random() * 360);