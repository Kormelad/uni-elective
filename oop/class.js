class Human {
  age;

  constructor(age, name) {
    this.age = age;
    if (name) {
      this.name = name;
    }
  }

  liveYear() {
    this.age++;
  }
}

const dimaObj = {
  age: 18,
  liveYear: function() {
    this.age++
  }
};
const dima = new Human(18);
const andrey = new Human(30);

dima.liveYear();
dima.liveYear();
andrey.liveYear();

console.log(dima, andrey, dimaObj);
