import PersonFactory from './PersonFactory';

describe('PersonFactory', () => {
  test('Create person', () => {
    const factory = new PersonFactory();

    const person1 = factory.createPerson('John');
    expect(person1.info()).toMatchObject({ id: 0, name: 'John' });

    const person2 = factory.createPerson('Ana');
    expect(person2.info()).toMatchObject({ id: 1, name: 'Ana' });
  });
});
