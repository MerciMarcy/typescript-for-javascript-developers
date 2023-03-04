export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let marcy = new Person('Marcy', 27);
console.log(marcy);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;
const profile: Profile = ['Mac', 27];
const mac = new Person(...profile);
console.log(mac);

/**
 * Obtain the parameters of a constructor function type in a tuple
 */
type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;
