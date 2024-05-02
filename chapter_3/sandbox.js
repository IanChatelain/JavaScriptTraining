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
// let i = 3;
// do{
//     console.log('val of i is: ', i);
//     i++;
// }while(i < 5)

// ------------- Part 4 - If Statements (0:18:00) ---------------
// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3){
//     console.log("that's a lot of ninjas");
// }

// const password = 'p@ss';

// if(password.length >= 8){
//     console.log('that password is long enough');
// }

// ------------- Part 5 - Else Statements (0:22:00) ---------------
// const password = 'p@ss';

// if(password.length >= 12){
//     console.log('that password is mighty strong');
// } else if(password.length >= 8){
//     console.log('that password is long enough');
// } else {
//     console.log('password is not long enough');
// }

// ------------- Part 6 - Logical Operators (0:26:00) ---------------
// const password = 'p@ss12';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// } else if(password.length >= 8 || password.includes('@') && password.length > 5){
//     console.log('that password is strong enough!');
// } else {
//     console.log('password is not strong enough');
// }

// ------------- Part 7 - Logical NOT (0:31:00) ---------------

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);

// ------------- Part 8 - Break and Continue (Loops) (0:35:00) ---------------
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

// ------------- Part 9 - Switch statements (Loops) (0:40:00) ---------------
// const grade = 'P';

// switch(grade){
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got an B!');
//         break;
//     case 'C':
//         console.log('you got an C!');
//         break;
//     case 'D':
//         console.log('you got an D!');
//         break;
//     case 'E':
//         console.log('you got an E!');
//         break;
//     default:
//         console.log('not a valid grade');
// }

// ------------- Part 10 - Block Scope (0:45:00) ---------------
const age = 30;

if(true){
    const age = 40;
    const name = 'shaun';
    console.log('inside 1st code block: ', age, name);

    if(true){
        const age = 50;
        console.log('inside 2nd code block: ', age);
    }
}

console.log('outside code block: ', age, name);