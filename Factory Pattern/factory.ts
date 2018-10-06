class Bucatar{
    public GetPizza(type:String){
        if(type == "carnivora"){
            return new PizzaCarnivora();
        }
        else if(type == "quatro formaggi"){
            return new PizzaQuatroFormaggi();
        }
    }
}

abstract class Pizza{
    public Name:String;
    public abstract Price():number;
}

class PizzaCarnivora extends Pizza{
    constructor() {
        super();
        this.Name = "Carnivora";
    }
    public Price(): number {
        return 19;
    }
}

class PizzaQuatroFormaggi extends Pizza{
    constructor() {
        super();
        this.Name = "Quatro Formaggi";
    }
    public Price(): number {
        return 19.5;
    }
}

var bucatar = new Bucatar();
var pizza = bucatar.GetPizza("carnivora");
var altaPizza = bucatar.GetPizza("quatro formaggi");
console.log(pizza.Price());
console.log(altaPizza.Price());