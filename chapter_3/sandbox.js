// Chapter 3 - Control Flow

// ------------- Part 1 - For Loops ---------------
// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);
//     let html = `<div>${names[i]}</div>`
//     console.log(html);
// }

// ------------- Part 2 - While Loops (0:11:00) ---------------
// let i = 0;
// const names = ['shaun', 'mario', 'luigi'];

// while(i < 5){
//     console.log('in loop', i)
//     i++
// }

// let i = 0;
// const names = ['shaun', 'mario', 'luigi'];

// while(i < names.length){
//     console.log(names[i])
//     i++
// }

// ------------- Part 3 - Do-While Loops (0:15:00) ---------------
let i = 3;
do{
    console.log('val of i is: ', i);
    i++;
}while(i < 5)