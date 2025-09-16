class Class {
  #name;

  #fields = [];

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get fields() {
    return this.#fields;
  }

  toString() {
    const buffer = [];
    buffer.push(`class ${this.name} {\n`);

    if (this.#fields.length > 0) {
      const params = this.#fields.map((f) => f.name).join(', ');
      buffer.push(`  constructor(${params}) {\n`);
      this.#fields.forEach((f) =>
        buffer.push(`    this.${f.name} = ${f.name};\n`),
      );
      buffer.push('  }\n');
    }

    buffer.push('}');
    return buffer.join('');
  }
}

export default Class;
