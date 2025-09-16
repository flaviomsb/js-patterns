import { describe, test, expect } from '@jest/globals';
import counterObj from './counterObj';

describe('Counter object as singleton', () => {
  test('increment', () => {
    counterObj.increment().increment().increment();

    expect(counterObj.getCount()).toBe(3);
  });

  test('decrement', () => {
    counterObj.decrement().decrement();

    expect(counterObj.getCount()).toBe(1);
  });
});
