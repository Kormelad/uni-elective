const str = '1' + '2'; // '12'
const num = 1 + 2; // 3

// function operatorPlus(a: string, b: string) { }

// function operatorPlus(a: number, b: number) { }

function operatorPlus(a, b) {
  if (typeof a === 'string' && typeof a === 'string') {
    return concatenate(a, b);
  } else if (typeof a === 'number' && typeof a === 'number') {
    return sum(a, b);
  } else if (typeof a === 'object' && typeof a === 'object') {
    return Object.assign(a, b);
  }
}

class Animal {
  age = 0;

  say() { }

  liveYear() {
    this.age++;
  }
}

class Cat extends Animal {
  say() {
    console.log('Meow');
  }
}

class Dog extends Animal {
  say() {
    console.log('Wuff');
  }
}

function sayHi(animal) {
  animal.say();
}

sayHi(new Cat());
sayHi(new Dog());
