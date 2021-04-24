'use strict';
// Primitives

const firstName = 'Дмитрий';
const lastName = "Медведев";
let age = 26.5;
const bigNumber = 1000n;
let isAsleep = false;

let education = null;
let work = undefined;

const uniqueKey = Symbol('1337');

// object

const worker = {
  firstName: firstName,
  age: age,
  isAsleep: isAsleep,
  education: education
};
const workers = [
  worker,
  {
    name: 'Андрей',
    age: 33
  }
];

workers[0];
worker.firstName; //
const workerNameField = 'firstName';

// console.log(worker[workerNameField]);

// console.log(typeof workers);
// console.log(workers instanceof Array);
// console.log(worker.hasOwnProperty('firstName'));
Object.keys(worker);

// console.log(parseInt('ef', 10));

Number('3');

let str = '42';

// console.log(age + Number(str));

if (Boolean(age)) {

}

age = 26;
let ageString = '26';

// console.log(26 == '26');
// console.log(26 === Number('26'));

if ((true && true) || false) {

}

const w = {
  a: {
    b: 1
  }
};

// console.log(w.b?.b);

if (true) {

} else if (false) {

}

const a = w.b ?
  1 ?
    2 :
    3 :
  2;

// while (false) {

// }

// do {

// } while (false)

for (let i = 1; i++; i < 10) {
  if (i < 5) {
    break;
  }
}

[1, 2, 3].forEach((element, index, array) => {
  // console.log(element, index);
});

for (let key in worker) {
  // console.log(worker[key]);
}

for (let value of [1, 2, 3]) {
  // console.log(value);
}

let a = 1;
switch (a) {
  case 1:
    console.log('a');
    break;
  case 2:
    console.log('b');
    break;
  default:
    console.log('c');
    break;
}

var switchCase = {
  1: () => console.log('a'),
  2: () => console.log('b')
}
switchCase[a];
