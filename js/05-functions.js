'use strict';
a(1, 2);

function a(worker = { name: 'Дмитрий' }) {
  const w = Object.assign({}, worker);
  w.name = 'Алексей';
  return w;
}

const b = function() {
  if (false) {
    b()
  }
}

b();

function createCounter() {
  let count = 0;
  return function updateCounter() {
    count++;
    console.log(count);
  };
}

// const counterUp = createCounter();
// const secondCounterUp = createCounter();
// counterUp();
// secondCounterUp();
// counterUp();
// secondCounterUp();
// counterUp();
// secondCounterUp();
// counterUp();

// arguments

// arrow functions

const arrowFunction = (asd) => {

};

const worker = {
  firstName: 'Дмитрий',
  lastName: 'Медведев',
  getFullname: function() {
    console.log(this);
    return this.firstName + ' ' + this.lastName;
  },
  age: 26,
  arrowFunc: () => {

  }
};

// console.log(worker.getFullname());

const func = worker.getFullname;

const arrowFunc = () => {
  console.log(this);
};

// arrowFunc();

worker.arrowFunction = arrowFunc;
// worker.arrowFunction();

// class Human {
//   constructor() {
//     this.name = 'ДМ';
//     this.getFullname = () => {
//       // console.log(this);
//     }
//   }
// }

// const worker2 = new Human();
// // worker2.getFullname(); // worker {}
// const f = worker2.getFullname;
// f(); // window {}

this; // use strict
// obj.function() this = obj
// function() this = context
// (() => {}) this = this on creation

Array.isArray()

const worker2Copy = Object.assign({}, worker2);

// lodash

const doubledArray = [1, 2, 3].map((value) => {
  return value * 2;
});

// console.log(doubledArray);

// console.log(
//   [1, 2, 3, 4, 5, 6].filter((value) => {
//     return value % 2 === 0 ? value : false;
//   })
// );

// console.log([1, 2, 3].reduce((element, sum) => {
//   return sum + element;
// }, 0));

[1, 2, 3].map((value) => value * 2);

const worker3 = {
  age: 26,
  name: 'ДМ',
  isAsleep: false,
  f: 1
};

let { age: ag, name, ...trash } = worker3;
// console.log(ag, name);
// console.log(trash);

const user = {
  login: 123,
  name: 'Дмитрий',
  password: '123qwe'
}

const { password, ...passwordlessUser } = user;

console.log(passwordlessUser);

// rest spread

const w = {
  a: {
    b: 1
  }
};
try {
  console.log(w.c.b);
} catch (error) {
  alert('Неправильный объект, нет поля a');
}

class Human {

}
