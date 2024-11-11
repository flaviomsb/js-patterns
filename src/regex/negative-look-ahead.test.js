import { describe, test, expect } from '@jest/globals';

describe('negative look ahead (?!exp)', () => {
  test('List all cars not made by Honda', () => {
    const text = `
Honda Civic
Honda Accord
Honda Insight
Hyundai Accent
Toyota Corolla
Toyota Camry
Toyota Prius
Tesla Model 3
Tesla Model S
Tesla Model X`;

    expect(text.match(/^(?!honda).+/gim)).toMatchObject([
      'Hyundai Accent',
      'Toyota Corolla',
      'Toyota Camry',
      'Toyota Prius',
      'Tesla Model 3',
      'Tesla Model S',
      'Tesla Model X',
    ]);
  });
});
