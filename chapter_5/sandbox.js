// ---------- Part 1 - Object Literals (Tutorial #5) -------------
 
// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things to make with marmite']
// };

// console.log(user);
// console.log(user.name);

// // user.age = 35;
// console.log(user.age);

// console.log(user['location']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

// ---------- Part 2 - Object methods (Tutorial #5 @ 0:09:00) -------------
// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     location: 'berlin',
//     blogs: [    
//         { title: 'why mac & cheese rules', likes: 30 },
//         { title: '10 things to make with marmite', likes: 50 }
//     ],
//     login(){
//         console.log('the user logged in');
//     },
//     logout(){
//         console.log('the user logged out');
//     },
//     logBlogs(){
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs: ');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, blog.likes);
//         })
//     }
// };

// user.logBlogs();
// console.log(this);

// ---------- Part 3 - Math Object (Tutorial #5 @ 0:22:00) -------------
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

// ---------- Part 4 - Primitive and Reference Types (Tutorial #5 @ 0:28:00) -------------
// Primitive stored on stack, Reference stored on heap
// Assigning a new variable to an object (reference based)
// puts a pointer on the stack which refers to the object in the heap

// ** Primitive Value **
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// ** Reference Value **

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

// Changes userOne
userOne.age = 40;
console.log(userOne, userTwo);