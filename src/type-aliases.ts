export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'konnichiwa';

console.log(fooString, fooMojiretsu);

const example1 = {
  name: 'Marcy',
  age: 27,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Marcy',
  age: 27,
};

type Profile2 = typeof example1;

console.log(example1, example2);
