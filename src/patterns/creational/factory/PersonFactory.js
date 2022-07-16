import Person from './Person';

class PersonFactory {
  constructor() {
    this.index = 0;
  }

  createPerson(name) {
    const person = new Person(this.index, name);
    this.index += 1;

    return person;
  }
}

export default PersonFactory;
