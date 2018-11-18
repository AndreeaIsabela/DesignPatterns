class Task {
  private observers: Observer[] = [];
  private state: String[] = ['to do', 'in progress', 'done'];
  private currentState: String = '';
  private assignee: String = '';
  private taskName: String = '';

  public getCurrentState(): String {
    return this.currentState;
  }
  public getAsignee(): String {
    return this.assignee;
  }
  public getTaskName(): String {
    return this.taskName;
  }
  public setCurrentState(stateNumber): void {
    this.currentState = this.state[stateNumber];
    this.notifyAllObservers();
  }
  public setAsignee(newAssignee: String): void {
    this.assignee = newAssignee;
  }
  public setTaskName(newTaskName: String): void {
    this.taskName = newTaskName;
  }
  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  public notifyAllObservers(): void {
    this.observers.forEach(function (el) {
      el.update();
    })
  }
}

abstract class Observer {
  protected task: Task;
  protected testerName:String = '';
  protected response:Map<String,String> = new Map<String,String>();
  public abstract update(): void;
}

class FirstTester extends Observer {
  constructor(task: Task) {
    super();
    this.testerName = 'Mihai';
    this.task = task;
    this.response.set("to do",`Te apuci si tu anul asta de task, ${this.task.getAsignee()} ?`);
    this.response.set("in progress",`Hai ba si tu mai repede cu ${this.task.getTaskName()}!`);
    this.response.set('done', `${this.task.getAsignee()}, poti sa-mi spui si mie ce este cotetul acesta?`);
    this.task.addObserver(this);
  }
  public update() {
    console.log(`${this.testerName} : ${this.response.get(this.task.getCurrentState())}`)
  }
}
class SecondTester extends Observer {
  constructor(task: Task) {
    super();
    this.testerName = 'Mihai 2';
    this.task = task;
    this.response.set("to do",`Te apuci cand poti, ${this.task.getAsignee()}.`);
    this.response.set("in progress",`E ok, cand e ${this.task.getTaskName()} gata ma anunti`);
    this.response.set('done', `Il testez acum, ${this.task.getAsignee()}.`);
    this.task.addObserver(this);
  }
  public update() {
    console.log(`${this.testerName} : ${this.response.get(this.task.getCurrentState())}`)
  }
}

var task:Task = new Task();
task.setTaskName('Change potato component');
task.setAsignee('Cristi');

new FirstTester(task);
new SecondTester(task);

console.log('Add a new task :');
task.setCurrentState(0);
console.log('Task in progress :');
task.setCurrentState(1);
console.log('Task done :');
task.setCurrentState(2); 


