import { describe, test, expect } from '@jest/globals';
import StackArray from './StackArray';

describe('Stack array', () => {
  test('pop', () => {
    const stack = StackArray.fromValues(89, 90, 87);
    expect(stack.pop()).toBe(87);
  });

  test('push', () => {
    const stack = new StackArray();
    expect(stack.push('Anna').toArray()).toMatchObject(['Anna']);
  });

  test('size', () => {
    const stack = StackArray.fromValues(89, 90, 87);
    expect(stack.size()).toBe(3);
  });

  test('peek', () => {
    const stack = StackArray.fromValues(89, 90, 87);
    expect(stack.peek()).toBe(87);
  });

  test('isEmpty', () => {
    const stack = StackArray.fromValues(89, 90, 87);
    expect(stack.isEmpty()).toBeFalsy();
    stack.clear();
    expect(stack.isEmpty()).toBeTruthy();
  });

  test('toString', () => {
    const stack = StackArray.fromValues(89, 90, 87);
    expect(stack.toString()).toBe('89,90,87');
  });
});
