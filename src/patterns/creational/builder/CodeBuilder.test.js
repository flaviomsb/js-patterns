import { describe, test, expect } from '@jest/globals';
import CodeBuilder from './CodeBuilder';

describe('CodeBuilder', () => {
  test('empty test', () => {
    const cb = new CodeBuilder('Foo');

    expect(cb.toString()).toEqual('class Foo {\n}');
  });

  test('person test', () => {
    const cb = new CodeBuilder('Person');
    cb.addField('name')
      .addField('age');

    expect(cb.toString())
      .toEqual('class Person {\n'
        + '  constructor(name, age) {\n'
        + '    this.name = name;\n'
        + '    this.age = age;\n'
        + '  }\n'
        + '}');
  });
});
