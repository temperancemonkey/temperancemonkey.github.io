function addBox(ourWidth, ourHeight, ourColor, ourRotation, ourBorderRadius){

    const box = document.createElement('div');

    box.style.width = `${ourWidth}px`;
    box.style.height = `${ourHeight}px`;
    box.style.backgroundColor = ourColor;
    box.style.transform = `rotate(${ourRotation}deg)`;

    if (ourRotation > 180) {

        box.style.borderRadius = `${ourBorderRadius}%`;

    };

    document.body.appendChild(box)

};

for (let boxIndex = 0; boxIndex < 300; boxIndex = boxIndex + 1){

    const randomWidth = Math.random() * 150 + 100;
    const randomHeight = Math.random() * 150 * 100;
    const randomRotation = Math.random() * 360;
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}`;
    const randomBorderRadius = Math.random() * 100;

    setTimeout(function(){

        addBox(randomWidth, randomHeight, randomColor, randomRotation, randomBorderRadius);


    }, boxIndex * 1000);
};

