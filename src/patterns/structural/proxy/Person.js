class Person {
  constructor(age = 0) {
    this.age = age;
  }

  drink() {
    return 'drinking';
  }

  drive() {
    return 'driving';
  }

  drinkAndDrive() {
    return 'driving while drunk';
  }
}

export default Person;
