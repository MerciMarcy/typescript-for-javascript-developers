export {};

class Animal {
  constructor(public name: string) {
    this.name = name;
  }
  run(): string {
    return `${this.name} can run.`;
  }
}

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed
  }
  run(): string {
    // const parentMessage = super.run();
    // console.log(parentMessage)
    return `${super.run()} ${this.speed}km/h.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
console.log(new Animal("Micky").run())
console.log(new Lion("Simba", 80).run())