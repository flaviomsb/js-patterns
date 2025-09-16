import { describe, test, expect } from '@jest/globals';
import LinkedList from '../linkedlist/LinkedList';
import midpoint from './midpoint';

describe('Midpoint returns the middle node of an odd numbered list', () => {
  test('when the list has 3 elements', () => {
    const linkedList = new LinkedList<string>();
    linkedList.insertLast('a');
    linkedList.insertLast('b');
    linkedList.insertLast('c');
    expect(midpoint(linkedList)?.data).toEqual('b');
  });

  test('when the list has 5 elements', () => {
    const linkedList = new LinkedList<string>();
    linkedList.insertLast('a');
    linkedList.insertLast('b');
    linkedList.insertLast('c');
    linkedList.insertLast('d');
    linkedList.insertLast('e');
    expect(midpoint(linkedList)?.data).toEqual('c');
  });
});

describe('Midpoint returns the middle node of an even numbered list', () => {
  test('when the list has 2 elements', () => {
    const linkedList = new LinkedList<string>();
    linkedList.insertLast('a');
    linkedList.insertLast('b');
    expect(midpoint(linkedList)?.data).toEqual('a');
  });

  test('when the list has 4 elements', () => {
    const linkedList = new LinkedList<string>();
    linkedList.insertLast('a');
    linkedList.insertLast('b');
    linkedList.insertLast('c');
    linkedList.insertLast('d');
    expect(midpoint(linkedList)?.data).toEqual('b');
  });
});
