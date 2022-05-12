import DoublyLinkedList from './DoublyLinkedList';

describe('Doubly Linked List', () => {
  test('push', () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push('Europe');
    doublyLinkedList.push('Asia');
    doublyLinkedList.push('Oceania');

    expect(doublyLinkedList.length).toBe(3);
    expect(doublyLinkedList.head).toMatchObject({
      value: 'Europe',
      next: {
        value: 'Asia',
        next: {
          value: 'Oceania',
        },
        prev: {
          value: 'Europe',
        },
      },
      prev: null,
    });
    expect(doublyLinkedList.tail).toMatchObject({
      value: 'Oceania',
      next: null,
      prev: {
        value: 'Asia',
      },
    });
  });

  describe('pop', () => {
    const doublyLinkedList = new DoublyLinkedList([1000, 2000]);

    test.each([
      [2, 1, { value: 2000 }],
      [1, 0, { value: 1000 }],
      [0, 0, undefined],
    ])('List length before pop: %s and length after: %s', (lengthBefore, lengthAfter, node) => {
      const method = !node ? 'toBe' : 'toMatchObject';
      expect(doublyLinkedList.length).toBe(lengthBefore);
      expect(doublyLinkedList.pop())[method](node);
      expect(doublyLinkedList.length).toBe(lengthAfter);
    });
  });

  test('unshift', () => {
    const doublyLinkedList = new DoublyLinkedList(['Jessica', 'Jonathan']);
    expect(doublyLinkedList.length).toBe(2);

    let node = doublyLinkedList.shift();
    expect(doublyLinkedList.length).toBe(1);
    expect(node).toMatchObject({
      value: 'Jessica',
      next: null,
      prev: null,
    });

    node = doublyLinkedList.shift();
    expect(doublyLinkedList.length).toBe(0);
    expect(node).toMatchObject({
      value: 'Jonathan',
      next: null,
      prev: null,
    });

    node = doublyLinkedList.shift();
    expect(doublyLinkedList.length).toBe(0);
    expect(node).toBeUndefined();
  });

  describe('get', () => {
    const doublyLinkedList = new DoublyLinkedList(['John', 'Rick', 'Terrence']);

    test('when passing a valid index', () => {
      let node = doublyLinkedList.get(2);
      expect(node).toMatchObject({
        value: 'Terrence',
        next: null,
        prev: {
          value: 'Rick',
        },
      });

      node = doublyLinkedList.get(1);
      expect(node).toMatchObject({
        value: 'Rick',
        next: {
          value: 'Terrence',
          next: null,
          prev: {
            value: 'Rick',
          },
        },
      });
    });

    test('when passing an invalid index like -2 or >= list length', () => {
      expect(() => doublyLinkedList.get(-2)).toThrowError('index: -2 is out of bounds');
      expect(() => doublyLinkedList.get(4)).toThrowError('index: 4 is out of bounds');
    });
  });

  describe('insert', () => {
    const doublyLinkedList = new DoublyLinkedList(['Austin', 'Dallas', 'El Paso']);

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
      expect(() => doublyLinkedList.insert(5, 'San Antonio')).toThrowError('index: 5 is out of bounds');
    });
  });

  describe('remove', () => {
    const doublyLinkedList = new DoublyLinkedList(['John', 'Homer', 'Paul']);

    test('when removing with a valid index', () => {
      const toRemove = { value: 'Homer' };
      expect(doublyLinkedList.length).toBe(3);
      expect(doublyLinkedList.get(1)).toMatchObject(toRemove);

      expect(doublyLinkedList.remove(1)).toMatchObject(toRemove);
      expect(doublyLinkedList.length).toBe(2);
    });

    test('when index is not valid', () => {
      expect(() => doublyLinkedList.remove(5)).toThrowError('index: 5 is out of bounds');
    });
  });
});
