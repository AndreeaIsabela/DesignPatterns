abstract class Payment {
  public abstract payCheck(check: number):void;
  public abstract refound(money: number):void
}

class Money extends Payment {
  private balance: number;

  constructor(balance: number, check:number) {
    super();
    this.balance = balance;
    this.displayBalance();
  }
  public displayBalance():void{
    console.log(`Mai aveti  ${this.balance}lei in cont`);
  }
  public payCheck(money:number):void{
    if(this.balance >= money){
      this.balance -= money;
      console.log(`Din contul dumneavoastra au fost extrasi ${money}lei , soldul curent este de ${this.balance}`);
    }
    else{
      console.log(`Tranzactie esuata, soldul curent este de ${this.balance}`);
    }
  }
  public refound(money: number):void{
    this.balance += money;
    console.log(`Contul dumneavoastra a fost creditat cu ${money}lei, soldul curent este de ${this.balance}lei`);
  }
  
}

class CreditCard extends Payment{
  private balance: number;
  private money: Money;

  constructor(balance: number){
    super();
    this.balance = balance;
  }
  public payCheck(money:number):void{
    if(!this.money){
      this.money = new Money(this.balance, money);
    }
    this.money.payCheck(money);
  }
  public refound(money: number):void{
    if(!this.money){
      this.money = new Money(this.balance, money);
    }
    this.money.refound(money);
  }
}

const payment: Payment = new CreditCard(2000);

//factura de la Sephora
payment.payCheck(600); 
payment.payCheck(400);
payment.payCheck(1100);
payment.refound(100);
payment.payCheck(1100);

