import SinglyLinkedList from './SinglyLinkedList';
// import NodeNext from '../common/NodeNext';

describe('Linked List', () => {
  describe('constructor', () => {
    test('when instantiating', () => {
      const linkedList = new SinglyLinkedList();

      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();
      expect(linkedList.size()).toBe(0);
    });
  });

  describe('pop', () => {
    test('when list has more than one element', () => {
      const linkedList = SinglyLinkedList.from(5, 10, 15);

      expect(linkedList.size()).toBe(3);
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
      expect(linkedList.size()).toBe(2);
      expect(linkedList.tail).toMatchObject({
        value: 10,
        next: null,
      });
    });

    test('when list is empty', () => {
      const linkedList = new SinglyLinkedList();
      linkedList.push(5);

      expect(linkedList.size()).toBe(1);
      expect(linkedList.tail).toEqual(linkedList.head);

      let element = linkedList.pop();
      expect(element.value).toBe(5);
      expect(linkedList.size()).toBe(0);
      expect(linkedList.head).toBeNull();
      expect(linkedList.tail).toBeNull();

      element = linkedList.pop();
      expect(element).toBeUndefined();
    });
  });

  describe('push', () => {
    test('when list is empty', () => {
      const linkedList = new SinglyLinkedList();

      expect(linkedList.size()).toBe(0);

      linkedList.push(10);

      const node = {
        value: 10,
        next: null,
      };

      expect(linkedList.size()).toBe(1);
      expect(linkedList.head).toMatchObject(node);
      expect(linkedList.tail).toMatchObject(node);
    });

    test('when list is not empty', () => {
      const linkedList = SinglyLinkedList.from(5, 10);

      expect(linkedList.size()).toBe(2);
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

  describe('shift', () => {
    test('when list is empty', () => {
      const linkedList = new SinglyLinkedList();

      expect(linkedList.size()).toBe(0);
      expect(linkedList.shift()).toBeUndefined();
    });

    test('when list is not empty', () => {
      const linkedList = new SinglyLinkedList();
      linkedList.push('hello');
      linkedList.push('hallo');

      expect(linkedList.size()).toBe(2);

      let node = linkedList.shift();

      expect(node).toMatchObject({
        value: 'hello',
        next: null,
      });
      expect(linkedList.size()).toBe(1);
      expect(linkedList.tail).toEqual(linkedList.head);

      node = linkedList.shift();
      expect(node).toMatchObject({
        value: 'hallo',
        next: null,
      });
      expect(linkedList.size()).toBe(0);
    });
  });

  describe('unshift', () => {
    test('when list is empty', () => {
      const linkedList = new SinglyLinkedList();

      expect(linkedList.size()).toBe(0);

      linkedList.unshift({ route: '/home' });

      const node = { value: { route: '/home' }, next: null };

      expect(linkedList.size()).toBe(1);
      expect(linkedList.head).toMatchObject(node);
      expect(linkedList.tail).toMatchObject(node);
    });

    test('when list is not empty', () => {
      const linkedList = new SinglyLinkedList();
      linkedList.unshift(1);
      linkedList.unshift(1000);

      expect(linkedList.size()).toBe(2);
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

  describe('get', () => {
    const linkedList = new SinglyLinkedList();
    linkedList.push('John');
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
    const linkedList = SinglyLinkedList.from('Suzana', 'Mariana', 'Liz');

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
    const linkedList = SinglyLinkedList.from('Austin', 'Dallas', 'El Paso');

    test('when inserting at valid index that is not at the head or tail', () => {
      expect(linkedList.size()).toBe(3);
      expect(linkedList.toString()).toEqual('Austin -> Dallas -> El Paso -> ');

      linkedList.insert(1, 'Houston');

      expect(linkedList.size()).toBe(4);
      expect(linkedList.get(1)).toMatchObject({ value: 'Houston' });
      expect(linkedList.toString()).toEqual('Austin -> Houston -> Dallas -> El Paso -> ');
    });

    test('when inserting at the head', () => {
      linkedList.insert(0, 'McAllen');

      expect(linkedList.size()).toBe(5);
      expect(linkedList.head).toMatchObject({ value: 'McAllen', next: { value: 'Austin' } });
      expect(linkedList.toString()).toEqual('McAllen -> Austin -> Houston -> Dallas -> El Paso -> ');
    });

    test('when inserting at the tail', () => {
      linkedList.insert(4, 'Hunt');

      expect(linkedList.size()).toBe(6);
      expect(linkedList.tail).toMatchObject({ value: 'Hunt', next: null });
      expect(linkedList.toString()).toEqual('McAllen -> Austin -> Houston -> Dallas -> El Paso -> Hunt -> ');
    });

    test('when index is not valid', () => {
      expect(() => linkedList.insert(6, 'San Antonio')).toThrowError('index: 6 is out of bounds');
    });
  });

  describe('remove', () => {
    const linkedList = SinglyLinkedList.from('John', 'Homer', 'Paul', 'Joe', 'Rick', 'Tom');

    test('when removing with a valid index', () => {
      expect(linkedList.size()).toBe(6);
      expect(linkedList.get(1)).toMatchObject({ value: 'Homer', next: { value: 'Paul' } });

      expect(linkedList.remove(1)).toMatchObject({ value: 'Homer', next: null });
      expect(linkedList.size()).toBe(5);
    });

    test('when removing at index 0', () => {
      expect(linkedList.remove(0)).toMatchObject({ value: 'John', next: null });
      expect(linkedList.size()).toBe(4);
    });

    test('when removing at index 3 (length - 1)', () => {
      expect(linkedList.remove(3)).toMatchObject({ value: 'Tom', next: null });
      expect(linkedList.size()).toBe(3);
      expect(linkedList.toString()).toEqual('Paul -> Joe -> Rick -> ');
    });

    test('when index is not valid', () => {
      expect(() => linkedList.remove(5)).toThrowError('index: 5 is out of bounds');
    });
  });

  describe('reverse', () => {
    test('when list has two or more nodes', () => {
      const linkedList = SinglyLinkedList.from('Texas', 'Montana', 'North Dakota', 'Alabama');

      expect(linkedList.toString()).toEqual('Texas -> Montana -> North Dakota -> Alabama -> ');

      linkedList.reverse();

      expect(linkedList.toString()).toEqual('Alabama -> North Dakota -> Montana -> Texas -> ');
    });
  });
});
