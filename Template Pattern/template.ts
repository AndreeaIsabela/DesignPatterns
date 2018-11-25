abstract class Meal {
  abstract getIngredients(): void;
  abstract startCooking(): void;
  abstract cool(): void;

  public prepareMeal(): void {
    this.getIngredients();
    this.startCooking()
    this.cool();
  }
}

class Pasta extends Meal{
  cool():void{
    console.log('Let it cool for 5 minutes.')
  }
  startCooking():void{
    console.log('Do pasta stuff, magic!')
  }
  getIngredients():void{
    console.log('Get Pasta ingredients')
  }
}

class Lasagna extends Meal{
  cool():void{
    console.log('Let it cool for 15 minutes.')
  }
  startCooking():void{
    console.log('Do lasagna stuff, magic!')
  }
  getIngredients():void{
    console.log('Get Lasagna ingredients')
  }
}

let meal:Meal =  new Pasta();
meal.prepareMeal();
meal = new Lasagna();
meal.prepareMeal();