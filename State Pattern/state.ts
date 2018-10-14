abstract class State{
    public abstract drink(context:Context):void;
}

class Beer extends State{
    public drink(context:Context):void{
        console.log('Drink beer');
        context.setState(this);
        context.amountOfDrinks++;
    }
    public getDrinkName():String{
        return 'Beer state';
    }
}

class Wine extends State{
    public drink(context:Context):void{
        console.log('Drink wine');
        context.setState(this);
        context.amountOfDrinks += 1.5;
    }
    public getDrinkName():String{
        return 'Wine state';
    }
}

class Tequila extends State{
    public drink(context:Context):void{
        console.log('Drink Tequila');
        context.setState(this);
        context.amountOfDrinks += 2;
    }
    public getDrinkName():String{
        return 'Tequila state';
    }
}

class Context {
    private state:State;
    public amountOfDrinks:any = 0;
 
    public Context(){
       this.state = null;
    }
 
    public setState(state:State):void{
       this.state = state;

    }
 
    public getState():State{
       return this.state;
    }
 }

 var context:Context = new Context();

 state = new Wine();
 state.drink(context);
 var state = new Beer();
 state.drink(context);
 state.drink(context);
 state = new Tequila();
 state.drink(context);
 state.drink(context);
 state.drink(context);
 state.drink(context);
 state.drink(context);
 if(context.amountOfDrinks > 10){
     console.log('Please stop, you had enough! We\'ll call somebody to take you home');
 }


 