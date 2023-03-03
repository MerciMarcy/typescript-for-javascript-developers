export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Marcy', underTwenty: false };
// let profile: { [index: string]: string | number } = {};

/* how to write index signatures
    { [ index : typeForIndex ]: typeForValue }
*/
profile.name = 'Marcy';
profile.age = 27;
profile.nationality = 'Japan';
