import LinkedList from './LinkedList';
import Node from './Node';

describe('Linked list', () => {
  describe('constructor', () => {
    test('when no value is passed', () => {
      const linkedList = new LinkedList();

      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.length).toBe(0);
    });

    test('when a value is passed', () => {
      const linkedList = new LinkedList(5);

      expect(linkedList.head).toBeInstanceOf(Node);
      expect(linkedList.tail).toBeInstanceOf(Node);
      expect(linkedList.tail).toEqual(linkedList.head);
      expect(linkedList.length).toBe(1);
    });
  });

  describe('pop', () => {
    test('when list has more than one element', () => {
      const linkedList = new LinkedList(5);
      linkedList.push(10);
      linkedList.push(15);

      expect(linkedList.length).toBe(3);
      expect(linkedList.head).toMatchObject({
        value: 5,
        next: {
          value: 10,
          next: {
            value: 15,
            next: null,
          },
        },
      });
      expect(linkedList.tail).toMatchObject({
        value: 15,
        next: null,
      });

      const element = linkedList.pop();
      expect(element.value).toBe(15);
      expect(linkedList.length).toBe(2);
      expect(linkedList.tail).toMatchObject({
        value: 10,
        next: null,
      });
    });

    test('when list is empty', () => {
      const linkedList = new LinkedList(5);

      expect(linkedList.length).toBe(1);
      expect(linkedList.tail).toEqual(linkedList.head);

      let element = linkedList.pop();
      expect(element.value).toBe(5);
      expect(linkedList.length).toBe(0);
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();

      element = linkedList.pop();
      expect(element).toBeUndefined();
    });
  });

  describe('push', () => {
    test('when list is empty', () => {
      const linkedList = new LinkedList();

      expect(linkedList.length).toBe(0);

      linkedList.push(10);

      const node = {
        value: 10,
        next: null,
      };

      expect(linkedList.length).toBe(1);
      expect(linkedList.head).toMatchObject(node);
      expect(linkedList.tail).toMatchObject(node);
    });

    test('when list is not empty', () => {
      const linkedList = new LinkedList(5);
      linkedList.push(10);

      expect(linkedList.length).toBe(2);
      expect(linkedList.head).toMatchObject({
        value: 5,
        next: {
          value: 10,
          next: null,
        },
      });
      expect(linkedList.tail).toMatchObject({
        value: 10,
        next: null,
      });
    });
  });

  describe('unshift', () => {
    test('when list is empty', () => {
      const linkedList = new LinkedList();

      expect(linkedList.length).toBe(0);

      linkedList.unshift({ route: '/home' });

      const node = { value: { route: '/home' }, next: null };

      expect(linkedList.length).toBe(1);
      expect(linkedList.head).toMatchObject(node);
      expect(linkedList.tail).toMatchObject(node);
    });

    test('when list is not empty', () => {
      const linkedList = new LinkedList(1);

      linkedList.unshift(1000);

      expect(linkedList.length).toBe(2);
      expect(linkedList.head).toMatchObject({
        value: 1000,
        next: {
          value: 1,
          next: null,
        },
      });
      expect(linkedList.tail).toMatchObject({
        value: 1,
        next: null,
      });
    });
  });

  describe('shift', () => {
    test('when list is empty', () => {
      const linkedList = new LinkedList();

      expect(linkedList.length).toBe(0);
      expect(linkedList.shift()).toBeUndefined();
    });

    test('when list is not empty', () => {
      const linkedList = new LinkedList('hello');
      linkedList.push('hallo');

      expect(linkedList.length).toBe(2);

      let node = linkedList.shift();

      expect(node).toMatchObject({
        value: 'hello',
        next: null,
      });
      expect(linkedList.length).toBe(1);
      expect(linkedList.tail).toEqual(linkedList.head);

      node = linkedList.shift();
      expect(node).toMatchObject({
        value: 'hallo',
        next: null,
      });
      expect(linkedList.length).toBe(0);
    });
  });

  describe('get', () => {
    const linkedList = new LinkedList('John');
    linkedList.push(5);
    linkedList.push({ city: 'Austin' });

    test('when passing a valid index', () => {
      let node = linkedList.get(2);
      expect(node).toMatchObject({
        value: { city: 'Austin' },
        next: null,
      });

      node = linkedList.get(1);
      expect(node).toMatchObject({
        value: 5,
        next: {
          value: { city: 'Austin' },
          next: null,
        },
      });
    });

    test('when passing an invalid index like -2 or >= list length', () => {
      expect(() => linkedList.get(-2)).toThrowError('index: -2 is out of bounds');
      expect(() => linkedList.get(4)).toThrowError('index: 4 is out of bounds');
    });
  });

  describe('set', () => {
    const linkedList = new LinkedList();
    linkedList.fromArray(['Suzana', 'Mariana', 'Liz']);

    test('when index is valid', () => {
      expect(linkedList.set(2, 'Elizabeth')).toBeTruthy();
      expect(linkedList.get(2)).toMatchObject({
        value: 'Elizabeth',
      });
    });

    test('when index is not valid', () => {
      expect(() => linkedList.set(3, 'Marcelo')).toThrowError('index: 3 is out of bounds');
    });
  });

  describe('insert', () => {
    const linkedList = new LinkedList();
    linkedList.fromArray(['Austin', 'Dallas', 'El Paso']);

    test('when inserting at valid index', () => {
      expect(linkedList.length).toBe(3);
      expect(linkedList.get(1)).toMatchObject({ value: 'Dallas' });

      linkedList.insert(1, 'Houston');

      expect(linkedList.length).toBe(4);
      expect(linkedList.get(1)).toMatchObject({ value: 'Houston' });
    });

    test('when index is not valid', () => {
      expect(() => linkedList.insert(5, 'San Antonio')).toThrowError('index: 5 is out of bounds');
    });
  });

  describe('remove', () => {
    const linkedList = new LinkedList();
    linkedList.fromArray(['John', 'Homer', 'Paul']);

    test('when removing with a valid index', () => {
      const toRemove = { value: 'Paul' };
      expect(linkedList.length).toBe(3);
      expect(linkedList.get(2)).toMatchObject(toRemove);

      expect(linkedList.remove(2)).toMatchObject(toRemove);
      expect(linkedList.length).toBe(2);
    });

    test('when index is not valid', () => {
      expect(() => linkedList.remove(5)).toThrowError('index: 5 is out of bounds');
    });
  });

  describe('reverse', () => {
    test('when list has two or more nodes', () => {
      const linkedList = new LinkedList();
      linkedList.fromArray(['Texas', 'Montana', 'North Dakota']);

      expect(linkedList.head).toMatchObject({
        value: 'Texas',
        next: {
          value: 'Montana',
          next: {
            value: 'North Dakota',
          },
        },
      });

      linkedList.reverse();

      expect(linkedList.head).toMatchObject({
        value: 'North Dakota',
        next: {
          value: 'Montana',
          next: {
            value: 'Texas',
          },
        },
      });
    });
  });
});
