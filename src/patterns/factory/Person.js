class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  info() {
    const { id, name } = this;

    return { id, name };
  }
}

export default Person;
