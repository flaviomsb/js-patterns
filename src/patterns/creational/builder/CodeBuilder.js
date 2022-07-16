import Class from './Class';
import Field from './Field';

class CodeBuilder {
  #class;

  constructor(className) {
    this.#class = new Class(className);
  }

  addField(name) {
    this.#class.fields.push(
      new Field(name),
    );
    return this;
  }

  toString() {
    return this.#class.toString();
  }
}

export default CodeBuilder;
