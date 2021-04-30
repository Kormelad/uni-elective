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

const barsik = new Cat();

barsik.liveYear();
console.log(barsik);
barsik.say();


// --- Composition / Aggregation

class PenCore { // Стержень
  inkLevel;

  draw() {
    // realization
  }
}

class Ballpen {
  penCore = new PenCore();

  draw() {
    this.penCore.draw()
  }
}
