// console.log('Hello World!');

// alert('Heyyyyyyy')

// console.log(document);

// document.body.style.backgroundColor = 'blue';



// const temperature = 50;

// if ( temperature < 60) {
//     document.body.style.backgroundColor = 'skyblue';
//     console.log('brrrrrrrrr');
// } else {
//     document.body.style.backgroundColor = 'hotpink';
//     console.log('it is hot!');
// }



// const temperature = 50;

// if (temperature >= 85) {
//     document.body.style.backgroundColor = 'red';
//     console.log('boy it is hot!!!!!!!!!!!');
// } else if (temperature <= 32) {
//     document.body.style.backgroundColor = 'lightblue';
//     console.log('frigid!!!!!!');
// } else {
//     document.body.style.backgroundColor = 'yellow';
//     console.log('just right');
// }



// const temperature = 85;
// const isSunny = true;

// if (temperature <= 85 && isSunny) {
//     document.body.style.backgroundColor = 'yellow';
//     console.log('love the weather');
// } else {
//     document.body.style.backgroundColor = 'indianred';
//     console.log('ugh, it is too hot');
// }



// const isSunny = true;
// const isSnowy = true;
// const paragraph = document.getElementById('myParagraph');

// if (isSunny || isSnowy) {
//     paragraph.textContent = 'Loveeee the weather!'
//     console.log('The weather is great!');
// } 



// const isLoggedIn = false;
// const paragraph = document.getElementById('myParagraph');

// if (!isLoggedIn) {
//     paragraph.textContent = 'You are not logged in.';
//     console.log('Please log in!');
// }


// NUMERICAL LOOPS


// let count = 1;

// while (count < 10) {
//     console.log(count);
//     count = count + 1;
// }



// for (let i = 1; i <= 10; i = i + 1){
//     console.log(i);
// }



// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }



// PROMPT LOOPS


// let username = '';

// while (username === '') {
//     username = window.prompt('Enter your name');
// }

// console.log('Hello ' + username);



// FUNCTIONS


// function greet () {
//     console.log('Hello World');
// }

// greet(); // <-- calling the function



// function greetUser (username) {
//     console.log('Hello ' + username);
// }

// greetUser(username);


//FUNCTIONS THAT RETURN A VALUE


// function addPrices (a,b) {
//     return a + b;
// }

// const result = addPrices (6, 7);
// console.log('Total: $' + result)


// ARRAYS


// const fruit = ['apple', 'banana', 'orange'];

// console.log(fruit[2]);



// const basket = ['eggs', 'bacon', 'grits'];

// function addFruit(fruit) {
//     basket.push(fruit);
// }

// addFruit('sausage');
// addFruit('Pancakes')
// console.log(basket);



// OBJECTS


// const user = { name: 'Temperance', age: '21', isStudent: true }

// console.log(user.name);
// console.log(user.age);



// LOOPS & ARRAYS


// const pencilCase = [ 'red', 'green', 'blue', 'yellow', 'pink'];

// for (let i = 0; i < pencilCase.length; i++) {
//     pickColor(pencilCase[i]);
// } 

// function pickColor(color) {
//     console.log('I pick ' + color);
// }



// const paragraph = document.getElementById('myParagraph');

// function changeParagraph() {
//     paragraph.textContent = 'This is our updated paragraph';
// }

// changeParagraph();

// // now we change it's CSS

// function changeTextColor () {
//     paragraph.style.color = 'hotpink';
//     paragraph.style.fontSize = '5vw';
//     paragraph.style.textAlign = 'center';
//     paragraph.style.letterSpacing = '1vw';
// }

// changeTextColor();

// now we change backgroundColor

// const body = document.body;

// function changeBackgroundColor () {
//     body.style.backgroundColor = 'skyblue';
// }

// changeBackgroundColor();


// CHANGE BACKGROUND ON CLICK

// const background = document.body;

// function changeBackgroundColor () {
//     document.body.style.backgroundColor = 'hotpink';
// }

// document.addEventListener('click', changeBackgroundColor)


// const colors = ['pink', 'yellow', 'blue', 'grey', 'brown', 'aqua'];

// for (let i = 0; i < colors.length; i++ ) {
//     setTimeout( function (){
//         document.body.style.backgroundColor = colors[i];
//     }, i * 1000);
// }
