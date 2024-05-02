// ---------- Part 1 - Function Declaration and Expression (Tutorial #4) -------------
// // Function definition (Can be hoisted above function call during runtime)
// function greet(){
//     console.log('hello there');
// }

// // Function expression (Use semi-colon, cannot be hoisted above function call during runtime)
// const speak = function(){
//     console.log('good day!');
// };

// // greet();
// // greet();
// // greet();
// speak();

// ---------- Part 2 - Arguments and Parameters (Tutorial #4 @ 0:09:00) -------------

// const speak = function(name = 'luigi', time = 'night'){ // name is parameter
//     console.log(`good ${time} ${name}`);
// };

// speak();
// speak('shaun', 'day'); // name is argument

// ---------- Part 3 - Returning Values (Tutorial #4 @ 0:14:00) -------------

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }

// const area = calcArea(5);
// console.log('area is', area);

// ---------- Part 4 - Arrow Functions (Tutorial #4 @ 0:18:00) -------------
// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is', area);

// Zero or more than one parameter requires brackets

// const greet = function(){
//     return 'hello, world';
// }

// const greet = () => 'hello, world';
// const results = greet();
// console.log(results);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30], 0.2));

// ---------- Part 5 - Functions vs Methods (Tutorial #4 @ 0:25:00) -------------
// const name = 'shaun';

// // Functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // Methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// ---------- Part 6 - Callbacks and Foreach (Tutorial #4 @ 0:30:00) -------------
// const myFunc = (callbackFunc) => {
//     let value = 50;
//     callbackFunc(value);
// }

// myFunc(value => {
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }

// people.forEach(logPerson);

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`
})

ul.innerHTML = html;