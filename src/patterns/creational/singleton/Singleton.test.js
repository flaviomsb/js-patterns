import { describe, test, expect } from '@jest/globals';
import Singleton from './Singleton';

describe('Singleton', () => {
  test('same instance', () => {
    const instance1 = new Singleton();
    const instance2 = new Singleton();

    expect(instance1).toEqual(instance2);
  });
});
