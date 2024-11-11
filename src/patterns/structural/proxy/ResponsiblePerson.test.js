import { describe, test, expect } from '@jest/globals';
import Person from './Person';
import ResponsiblePerson from './ResponsiblePerson';

describe('Proxy pattern', () => {
  test('when person is a minor', () => {
    const minor = new Person(10);
    const responsiblePerson = new ResponsiblePerson(minor);

    expect(responsiblePerson.drink()).toEqual('too young');
    expect(responsiblePerson.drive()).toEqual('too young');
    expect(responsiblePerson.drinkAndDrive()).toEqual('dead');
  });

  test('when person is an adult', () => {
    const adult = new Person(25);
    const responsiblePerson = new ResponsiblePerson(adult);

    expect(responsiblePerson.drink()).toEqual('drinking');
    expect(responsiblePerson.drive()).toEqual('driving');
    expect(responsiblePerson.drinkAndDrive()).toEqual('dead');
  });
});
