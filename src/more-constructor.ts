export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Marcy', 27);
console.log(me);
