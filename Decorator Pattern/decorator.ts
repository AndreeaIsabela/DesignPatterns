abstract class Chocolate {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

class ReeseS extends Chocolate {
  public description = "Ciocolate Reese's";

  public cost(): number {
    return 2;
  }
}

class Snickers extends Chocolate {
  public description = "Ciocolate Snickers";

  public cost(): number {
    return 1;
  }
}

abstract class ChocolateFlavor extends Chocolate {
  decoratedChocolate: Chocolate;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class Vanilla extends ChocolateFlavor {
  constructor(chocolate: Chocolate) {
    super();
    this.decoratedChocolate = chocolate;
  }
  public getDescription(): string {
    return this.decoratedChocolate.getDescription() + 'Vanilla ';
  } public cost(): number {
    return this.decoratedChocolate.cost() + 1;
  }
}

class Nuts extends ChocolateFlavor {
  constructor(chocolate: Chocolate) {
    super();
    this.decoratedChocolate = chocolate;
  }
  public getDescription(): string {
    return this.decoratedChocolate.getDescription() + 'Nuts ';
  } public cost(): number {
    return this.decoratedChocolate.cost() + 0.5;
  }
}

let mySnickers = new Snickers();
mySnickers = new Vanilla(mySnickers);

mySnickers = new Nuts(mySnickers);
mySnickers = new Nuts(mySnickers);
mySnickers = new Nuts(mySnickers);
mySnickers = new Nuts(mySnickers);
mySnickers = new Nuts(mySnickers);
mySnickers = new Nuts(mySnickers);
mySnickers = new Nuts(mySnickers);

console.log('My chocolate costs:' + mySnickers.cost());
console.log('My chocolate is:' + mySnickers.getDescription());

