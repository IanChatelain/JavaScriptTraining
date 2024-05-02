// ---------- Part 1 - Document Object Model (Tutorial #6) -------------

// const para = document.querySelector('body > h1');

// console.log(para);

// const para = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');

// console.log(errors);

// ---------- Part 2 - Get Elements (Tutorial #6 @ 00:15:00) -------------
// const title = document.getElementById('page-title');
// console.log(title);

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);

// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// ---------- Part 2 - inner (Tutorial #6 @ 00:21:00) -------------
// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome!';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// ---------- Part 3 - Attributes (Tutorial #6 @ 00:21:00) -------------
// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'TheNet Ninja Website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// mssg.setAttribute('style', 'color: green;');

// const title = document.querySelector('h1');

//title.setAttribute('style', 'margin: 50px;');

// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';

// ---------- Part 4 - Add/Remove Classes (Tutorial #6 @ 00:42:00) -------------
// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

// Text content includes hidden elements
paras.forEach(para => {
    if(para.textContent.includes('error')){
        para.classList.add('error');
    }
    if(para.textContent.includes('success')){
        para.classList.add('success');
    }
});

const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');
