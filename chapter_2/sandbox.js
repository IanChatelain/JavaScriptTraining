// ---------- Part 1 - Variables -------------
// let age = 25;
// let year = 2019;

// // log things to console.
// // console.log(age, year);

// /* age = 30;
// console.log(age);

// const points = 100;
// console.log(points); */

// var score = 75;
// console.log(score);

// ---------- Part 2 - Strings -------------
// // Strings
// console.log('hello,world');

// let email = 'ichatelain@academic.rrc.ca';
// console.log(email);

// // String concatenation
// let firstName = 'Ian';
// let lastName = 'Chatelain';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // Getting characters
// console.log(fullName[2]);

// // String length
// console.log(fullName.length);

// // String methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// ---------- Part 3 - String Methods -------------
// Common string methods
// let email = 'ichatelain@academic.rrc.ca';

// // let result = email.lastIndexOf('e');

// // let result = email.slice(2, 5);

// // substr used in video is depricated
// // let result = email.substring(4, 10);

// // let result = email.replace('i', 'w');

// let result = email.replace('a', 'w');

// console.log(result);

// ---------- Part 4 - Numbers -------------
// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// Math operators +, -, *, /, **, %

// console.log(10 / 2);
// let result = radius % 3;
// let result = pi * radius**2;

// Order of operation - B E D M A S

// let result = 5 * (10 - 3)**2;

// console.log(result);

// let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;

// console.log(likes);

// NaN - Not a number

// console.log(5 / 'hello');
// console.log(5 * 'hello');

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// ---------- Part 5 - Templates (Tutorial #2 @ 46 min) -------------
// // Template strnigs
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// // Concatenation
// // let result  = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// // console.log(result);

// // Template string (Template literal)
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// // Creating HTML templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

// ---------- Part 6 - Arrays (Tutorial #2 @ 52 min) -------------
// let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// Array methods
// let result = ninjas.join(',');
// let result = ninjas.indexOf('chun-li');
// let result = ninjas.concat(['ken', 'crystal']);
// let result = ninjas.push('ken');
// result = ninjas.pop();

// console.log(result);

// ---------- Part 7 - Null & Undefined (Tutorial #2 @ 1:02:00) -------------
// let age = null;
// console.log(age, age + 3, `the age is ${age}`);

// ---------- Part 8 - Boolean (Tutorial #2 @ 1:05:00) -------------
// // Booleans & comparisons
// console.log(true, false, "true", "false");

// // Methods can return booleans
// let email = 'ichatelain@academic.rrc.ca';
// let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('@');
// let result = names.includes('luigi');

// console.log(result);

// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age <  20);
// console.log(age <= 25);

// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'crystal');
// console.log(name > 'Shaun');
// console.log(name > 'Crystal');

// ---------- Part 9 - Comparison (Tutorial #2 @ 1:15:00) -------------
// Loose comparison
// let age = 25;

// console.log(age == 25);
// console.log(age == '25');
// console.log(age != 25);
// console.log(age != '25');

// Strict comparison
// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== 25);
// console.log(age !== '25');

// ---------- Part 10 - Type conversion (Tutorial #2 @ 1:19:00) -------------
let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// let result = Number('hello');
// let result = String(50);
// let result = Boolean(100);
// let result = Boolean('');


console.log(result, typeof result);
