export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Marcy',
  age: 27,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Sura',
  age: 26,
};

// friend.age++;

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;
