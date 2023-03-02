export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name} age: ${this.age}`;
  }
}

let tato = new Person('Taro', 30);
// let hanako = new Person();

// console.log(tato);
console.log(tato.profile());
