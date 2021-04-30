class Human {
  _age; // public / protected / private
  #name;

  constructor(age, name) {
    this._age = age;
    this.#name = name;
  }

  liveYear() {
    this._age++;
  }

  sayHi() {
    console.log(`Меня зовут ${this.#name}`);
  }
}

const dima = new Human(18, 'Dima');

dima.age = -20; // on private / protected will throw an error
dima.sayHi();
