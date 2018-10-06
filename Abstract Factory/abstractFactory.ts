class FactoryProducer{
    public static getFactory(type:String){
        if(type == 'Bucatar'){
            return new Bucatar();
        }
        if(type == 'Cofetar'){
            return new Cofetar();
        }
        return null;
    }
}

abstract class AbstractFactory{
    public  GetCake(type:String):Cake{
        return null;
    }
    public  GetPizza(type:String):Pizza{
        return null;
    }
}

class Cofetar extends AbstractFactory{
    public GetCake(type:String):Cake{
        if(type =='lacta'){
            return new Lacta();
        }
        if(type =='profiterol'){
            return new Profiterol();
        }
        return null;
    }
}

class Bucatar extends AbstractFactory{
    public GetPizza(type:String):Pizza{
        if(type == "carnivora"){
            return new PizzaCarnivora();
        }
        else if(type == "quatro formaggi"){
            return new PizzaQuatroFormaggi();
        }
        return null;
    }
}

abstract class Cake{
    public Name:String;
    public abstract Price():number;
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

class Lacta extends Cake{
    constructor(){
        super();
        this.Name = 'Lacta';
    }

    public Price():number {
        return 7.5;
    }
}

class Profiterol extends Cake{
    constructor(){
        super();
        this.Name = 'Profiterol';
    }

    public Price():number {
        return 7;
    }
}

var BucatarFactory = FactoryProducer.getFactory('Bucatar');
var pizza = BucatarFactory.GetPizza('carnivora');
console.log(pizza.Price());
var CofetarFactory =FactoryProducer.getFactory('Cofetar');
var cake = CofetarFactory.GetCake('lacta');
console.log(cake.Price());