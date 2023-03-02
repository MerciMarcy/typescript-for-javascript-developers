export {};

// class VisaCard {
//   readonly owner: string;

//   constructor(owner: string) {
//     this.owner = owner;
//   }
// }
class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("Marcy");

console.log(myVisaCard.owner);
// myVisaCard.owner = "Masa";