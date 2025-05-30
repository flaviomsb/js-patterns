import { describe, test, expect } from '@jest/globals';
import Stack from './Stack';
import NodeNext from './NodeNext';

describe('Stack', () => {
  describe('constructor', () => {
    test('when no value is passed', () => {
      const stack = new Stack();

      expect(stack.top).toBeNull();
      expect(stack.length).toBe(0);
    });

    test('when a value is passed', () => {
      const stack = new Stack(5);

      expect(stack.top).toBeInstanceOf(NodeNext);
      expect(stack.length).toBe(1);
    });
  });

  describe('push', () => {
    test('pushing new value onto the stack', () => {
      const stack = new Stack();
      stack.push(80);
      stack.push(75);

      expect(stack.length).toBe(2);
      expect(stack.push(23).length).toBe(3);
    });
  });

  describe('pop', () => {
    test('popping from a populated stack', () => {
      const stack = Stack.fromValues(75, 25);

      expect(stack.length).toBe(2);
      expect(stack.pop()).toMatchObject({ value: 25 });
      expect(stack.length).toBe(1);
      expect(stack.pop()).toMatchObject({ value: 75 });
      expect(stack.length).toBe(0);
    });

    test('popping from an empty stack', () => {
      const stack = new Stack();

      expect(stack.length).toBe(0);
      expect(stack.pop()).toBeUndefined();
    });
  });
});
