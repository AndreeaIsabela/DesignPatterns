class Person {
  private name: string;
  private gender: string;
  private maritalSituation: string;

  constructor(name: string, gender: string, maritalSituation: string) {
    this.gender = gender;
    this.maritalSituation = maritalSituation;
    this.name = name;
  }

  public getName() { return this.name }
  public getGender() { return this.gender }
  public getMaritalSituation() { return this.maritalSituation }

}

interface Criteria {
  meetCriteria(persons: Person[]): Person[];
}

class CriteriaMale implements Criteria {
  public meetCriteria(persons: Person[]): Person[] {
    let malePersons: Person[] = [];
    for (let person of persons) {
      if (person.getGender() == 'Male') {
        malePersons.push(person);
      }
    };
    return malePersons;
  }
}

class CriteriaFemale implements Criteria {
  public meetCriteria(persons: Person[]): Person[] {
    let femalePersons: Person[] = [];
    for (let person of persons) {
      if (person.getGender() == 'Female') {
        femalePersons.push(person);
      }
    };
    return femalePersons;
  }
}

class CriteriaSingle implements Criteria {
  public meetCriteria(persons: Person[]): Person[] {
    let singlePersons: Person[] = [];
    for (let person of persons) {
      if (person.getMaritalSituation() == 'Single') {
        singlePersons.push(person);
      }
    };
    return singlePersons;
  }
}

class AndCriteria implements Criteria{
  private criteria:Criteria;
  private otherCriteria:Criteria;

  constructor(criteria:Criteria, otherCriteria:Criteria){
    this.criteria = criteria;
    this.otherCriteria = otherCriteria;
  }

  public meetCriteria(persons: Person[]): Person[] {
  let firstCriteriaPersons:Person[] = this.criteria.meetCriteria(persons);
  return this.otherCriteria.meetCriteria(firstCriteriaPersons);
  }
}

class OrCriteria implements Criteria{
  private criteria:Criteria;
  private otherCriteria:Criteria;

  constructor(criteria:Criteria, otherCriteria:Criteria){
    this.criteria = criteria;
    this.otherCriteria = otherCriteria;
  }

  public meetCriteria(persons: Person[]): Person[] {
  let firstCriteriaPersons:Person[] = this.criteria.meetCriteria(persons);
  let otherCriteriaPersons:Person[] = this.otherCriteria.meetCriteria(persons);
  
  for(let person of otherCriteriaPersons){
    if(!firstCriteriaPersons.includes(person)){
      firstCriteriaPersons.push(person);
    }
  }
  return firstCriteriaPersons;
  }
}

let persons:Person[]=[];
persons.push(new Person("Mihai","Male","Single"));
persons.push(new Person("Cristi","Male","Married"));
persons.push(new Person("Lazara","Female","Single"));
persons.push(new Person("Oana","Female","Married"));
persons.push(new Person("Liana","Female","Single"));
persons.push(new Person("Alex","Male","Married"));

let male:Criteria = new CriteriaMale();
let female:Criteria = new CriteriaFemale();
let single:Criteria = new CriteriaSingle();
let singleMale:Criteria = new AndCriteria(single, male);
let singleOrFemale:Criteria = new OrCriteria(single, female);
console.log("Males: ");
console.log(male.meetCriteria(persons));

console.log("Females: ");
console.log(female.meetCriteria(persons));

console.log("Single Males: ");
console.log(singleMale.meetCriteria(persons));

console.log("Single or females: ");
console.log(singleOrFemale.meetCriteria(persons));