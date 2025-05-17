class ResponsiblePerson {
  constructor(person) {
    this.person = person;
  }

  get age() {
    return this.person.age;
  }

  set age(value) {
    this.person.age = value;
  }

  drink() {
    if (this.age < 18) return 'too young';

    return this.person.drink();
  }

  drive() {
    if (this.age < 16) return 'too young';

    return this.person.drive();
  }

  drinkAndDrive() {
    return 'dead';
  }
}

export default ResponsiblePerson;
