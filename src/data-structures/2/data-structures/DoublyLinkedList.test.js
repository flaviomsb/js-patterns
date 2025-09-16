import { describe, test, expect } from '@jest/globals';
import { DoublyLinkedList } from './DoublyLinkedList';

describe('Doubly Linked List', () => {
  test('push', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push('Oppenheimer').push('Bohr').push('Plank');

    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.head).toMatchObject({
      value: 'Oppenheimer',
      next: {
        value: 'Bohr',
        next: {
          value: 'Plank',
        },
        prev: {
          value: 'Oppenheimer',
        },
      },
      prev: null,
    });
    expect(doublyLinkedList.tail).toMatchObject({
      value: 'Plank',
      next: null,
      prev: {
        value: 'Bohr',
      },
    });
  });

  describe('pop', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(1000).push(2000);

    test.each([
      [2, 1, { value: 2000 }],
      [1, 0, { value: 1000 }],
      [0, 0, null],
    ])(
      'List length before pop: %s and length after: %s',
      (lengthBefore, lengthAfter, node) => {
        const method = !node ? 'toBe' : 'toMatchObject';
        expect(doublyLinkedList.length).toBe(lengthBefore);
        expect(doublyLinkedList.pop())[method](node);
        expect(doublyLinkedList.length).toBe(lengthAfter);
      },
    );
  });

  test('shift', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push('Meitner').push('Feynman');

    expect(doublyLinkedList.length).toBe(2);

    let node = doublyLinkedList.shift();
    expect(doublyLinkedList.length).toBe(1);
    expect(node).toMatchObject({
      value: 'Meitner',
      next: null,
      prev: null,
    });

    node = doublyLinkedList.shift();
    expect(doublyLinkedList.length).toBe(0);
    expect(node).toMatchObject({
      value: 'Feynman',
      next: null,
      prev: null,
    });

    node = doublyLinkedList.shift();
    expect(doublyLinkedList.length).toBe(0);
    expect(node).toBeNull();
  });

  describe('get', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push('Heisenberg').push('Dirac').push('Fermi');

    test('when passing a valid index', () => {
      let node = doublyLinkedList.get(2);
      expect(node).toMatchObject({
        value: 'Fermi',
        next: null,
        prev: {
          value: 'Dirac',
        },
      });

      node = doublyLinkedList.get(1);
      expect(node).toMatchObject({
        value: 'Dirac',
        next: {
          value: 'Fermi',
          next: null,
        },
      });
    });

    test('when passing an invalid index like -2 or >= list length', () => {
      expect(doublyLinkedList.get(-2)).toBeNull();
      expect(doublyLinkedList.get(4)).toBeNull();
    });
  });

  describe('insert', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push('Austin').push('Dallas').push('El Paso');

    test('when inserting at valid index', () => {
      expect(doublyLinkedList.length).toBe(3);
      expect(doublyLinkedList.get(1)).toMatchObject({
        value: 'Dallas',
        next: {
          value: 'El Paso',
        },
        prev: {
          value: 'Austin',
        },
      });

      doublyLinkedList.insert(1, 'Houston');

      expect(doublyLinkedList.length).toBe(4);
      expect(doublyLinkedList.get(1)).toMatchObject({
        value: 'Houston',
        next: {
          value: 'Dallas',
        },
        prev: {
          value: 'Austin',
        },
      });
    });

    test('when index is not valid', () => {
      expect(doublyLinkedList.insert(5, 'San Antonio')).toBeFalsy();
    });
  });

  describe('remove', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push('John').push('Homer').push('Paul');

    test('when removing with a valid index', () => {
      const toRemove = { value: 'Homer' };
      expect(doublyLinkedList.length).toBe(3);
      expect(doublyLinkedList.get(1)).toMatchObject(toRemove);

      expect(doublyLinkedList.remove(1)).toMatchObject(toRemove);
      expect(doublyLinkedList.length).toBe(2);
    });

    test('when index is not valid', () => {
      expect(doublyLinkedList.remove(5)).toBeNull();
    });
  });

  describe('reverse', () => {
    test('when list has two or more nodes', () => {
      const doublyLinkedList = new DoublyLinkedList();
      doublyLinkedList.push(1).push(3).push(5).push(7);

      expect(doublyLinkedList.toString()).toEqual('1,3,5,7');
      doublyLinkedList.reverse();
      expect(doublyLinkedList.toString()).toEqual('7,5,3,1');
    });
  });
});
