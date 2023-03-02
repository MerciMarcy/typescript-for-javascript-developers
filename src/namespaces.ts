export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

// const me = new Japanese.Person('Marcy');
const me = new Japanese.Tokyo.Person('Marcy');
const dareyanen = new Japanese.Osaka.Person('Takoyaki');
const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(me.name);
console.log(dareyanen.name);
console.log(michael);
