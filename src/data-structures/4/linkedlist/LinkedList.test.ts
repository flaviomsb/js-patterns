import LinkedList from './LinkedList';
import Node from './Node';

describe('LinkedList', () => {
  test('List is a class', () => {
    expect(typeof LinkedList.prototype.constructor).toEqual('function');
  });

  test('Node is a class', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
  });

  describe('A Node', () => {
    test('has properties "data" and "next"', () => {
      const node = new Node('a');
      node.next = new Node('b');
      expect(node.data).toEqual('a');
      expect(node.next.data).toEqual('b');
    });
  });

  describe('Insert First', () => {
    test('appends a node to the start of the list', () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst(1);
      expect(linkedList.head?.data).toEqual(1);
      linkedList.insertFirst(2);
      expect(linkedList.head?.data).toEqual(2);
    });
  });

  describe('Size', () => {
    test('returns the number of items in the linked list', () => {
      const linkedList = new LinkedList();
      expect(linkedList.size()).toEqual(0);
      linkedList.insertFirst(1);
      linkedList.insertFirst(1);
      linkedList.insertFirst(1);
      linkedList.insertFirst(1);
      expect(linkedList.size()).toEqual(4);
    });
  });

  describe('GetFirst', () => {
    test('returns the first element', () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst(1);
      expect(linkedList.getFirst()?.data).toEqual(1);
      linkedList.insertFirst(2);
      expect(linkedList.getFirst()?.data).toEqual(2);
    });
  });

  describe('GetLast', () => {
    test('returns the last element', () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst(2);
      expect(linkedList.getLast()).toEqual({ data: 2, next: null });
      linkedList.insertFirst(1);
      expect(linkedList.getLast()).toEqual({ data: 2, next: null });
    });
  });

  describe('Clear', () => {
    test('empties out the list', () => {
      const linkedList = new LinkedList();
      expect(linkedList.size()).toEqual(0);
      linkedList.insertFirst(1);
      linkedList.insertFirst(1);
      linkedList.insertFirst(1);
      linkedList.insertFirst(1);
      expect(linkedList.size()).toEqual(4);
      linkedList.clear();
      expect(linkedList.size()).toEqual(0);
    });
  });

  describe('RemoveFirst', () => {
    test('removes the first node when the list has a size of one', () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst('a');
      linkedList.removeFirst();
      expect(linkedList.size()).toEqual(0);
      expect(linkedList.getFirst()).toEqual(null);
    });

    test('removes the first node when the list has a size of three', () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst('c');
      linkedList.insertFirst('b');
      linkedList.insertFirst('a');
      linkedList.removeFirst();
      expect(linkedList.size()).toEqual(2);
      expect(linkedList.getFirst()?.data).toEqual('b');
      linkedList.removeFirst();
      expect(linkedList.size()).toEqual(1);
      expect(linkedList.getFirst()?.data).toEqual('c');
    });
  });

  describe('RemoveLast', () => {
    test('RemoveLast removes the last node when list is empty', () => {
      const linkedList = new LinkedList();
      expect(() => {
        linkedList.removeLast();
      }).not.toThrow();
    });

    test('RemoveLast removes the last node when list is length 1', () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst('a');
      linkedList.removeLast();
      expect(linkedList.head).toEqual(null);
    });

    test('RemoveLast removes the last node when list is length 2', () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst('b');
      linkedList.insertFirst('a');

      linkedList.removeLast();

      expect(linkedList.size()).toEqual(1);
      expect(linkedList.head?.data).toEqual('a');
    });

    test('RemoveLast removes the last node when list is length 3', () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst('c');
      linkedList.insertFirst('b');
      linkedList.insertFirst('a');
      linkedList.removeLast();

      expect(linkedList.size()).toEqual(2);
      expect(linkedList.getLast()?.data).toEqual('b');
    });
  });

  describe('InsertLast', () => {
    test('adds to the end of the list', () => {
      const linkedList = new LinkedList();
      linkedList.insertFirst('a');
      linkedList.insertLast('b');

      expect(linkedList.size()).toEqual(2);
      expect(linkedList.getLast()?.data).toEqual('b');
    });
  });

  describe('GetAt', () => {
    test('returns the node at given index', () => {
      const linkedList = new LinkedList();
      expect(linkedList.getAt(10)).toEqual(null);

      linkedList.insertLast(1);
      linkedList.insertLast(2);
      linkedList.insertLast(3);
      linkedList.insertLast(4);

      expect(linkedList.getAt(0)?.data).toEqual(1);
      expect(linkedList.getAt(1)?.data).toEqual(2);
      expect(linkedList.getAt(2)?.data).toEqual(3);
      expect(linkedList.getAt(3)?.data).toEqual(4);
    });
  });

  describe('RemoveAt', () => {
    test('removeAt doesnt crash on an empty list', () => {
      const linkedList = new LinkedList();
      expect(() => {
        linkedList.removeAt(0);
        linkedList.removeAt(1);
        linkedList.removeAt(2);
      }).not.toThrow();
    });

    test('removeAt doesnt crash on an index out of bounds', () => {
      const linkedList = new LinkedList();
      expect(() => {
        linkedList.insertFirst('a');
        linkedList.removeAt(1);
      }).not.toThrow();
    });

    test('removeAt deletes the first node', () => {
      const linkedList = new LinkedList();
      linkedList.insertLast(1);
      linkedList.insertLast(2);
      linkedList.insertLast(3);
      linkedList.insertLast(4);
      expect(linkedList.getAt(0)?.data).toEqual(1);
      linkedList.removeAt(0);
      expect(linkedList.getAt(0)?.data).toEqual(2);
    });

    test('removeAt deletes the node at the given index', () => {
      const linkedList = new LinkedList();
      linkedList.insertLast(1);
      linkedList.insertLast(2);
      linkedList.insertLast(3);
      linkedList.insertLast(4);
      expect(linkedList.getAt(1)?.data).toEqual(2);
      linkedList.removeAt(1);
      expect(linkedList.getAt(1)?.data).toEqual(3);
    });

    test('removeAt works on the last node', () => {
      const linkedList = new LinkedList();
      linkedList.insertLast(1);
      linkedList.insertLast(2);
      linkedList.insertLast(3);
      linkedList.insertLast(4);
      expect(linkedList.getAt(3)?.data).toEqual(4);
      linkedList.removeAt(3);
      expect(linkedList.getAt(3))?.toEqual(null);
    });
  });

  describe('InsertAt', () => {
    test('inserts a new node with data at the 0 index when the list is empty', () => {
      const linkedList = new LinkedList();
      linkedList.insertAt('hi', 0);
      expect(linkedList.getFirst()?.data).toEqual('hi');
    });

    test('inserts a new node with data at the 0 index when the list has elements', () => {
      const linkedList = new LinkedList();
      linkedList.insertLast('a');
      linkedList.insertLast('b');
      linkedList.insertLast('c');
      linkedList.insertAt('hi', 0);
      expect(linkedList.getAt(0)?.data).toEqual('hi');
      expect(linkedList.getAt(1)?.data).toEqual('a');
      expect(linkedList.getAt(2)?.data).toEqual('b');
      expect(linkedList.getAt(3)?.data).toEqual('c');
    });

    test('inserts a new node with data at a middle index', () => {
      const linkedList = new LinkedList();
      linkedList.insertLast('a');
      linkedList.insertLast('b');
      linkedList.insertLast('c');
      linkedList.insertLast('d');
      linkedList.insertAt('hi', 2);
      expect(linkedList.getAt(0)?.data).toEqual('a');
      expect(linkedList.getAt(1)?.data).toEqual('b');
      expect(linkedList.getAt(2)?.data).toEqual('hi');
      expect(linkedList.getAt(3)?.data).toEqual('c');
      expect(linkedList.getAt(4)?.data).toEqual('d');
    });

    test('inserts a new node with data at a last index', () => {
      const linkedList = new LinkedList();
      linkedList.insertLast('a');
      linkedList.insertLast('b');
      linkedList.insertAt('hi', 2);
      expect(linkedList.getAt(0)?.data).toEqual('a');
      expect(linkedList.getAt(1)?.data).toEqual('b');
      expect(linkedList.getAt(2)?.data).toEqual('hi');
    });

    test('insert a new node when index is out of bounds', () => {
      const linkedList = new LinkedList();
      linkedList.insertLast('a');
      linkedList.insertLast('b');
      linkedList.insertAt('hi', 30);

      expect(linkedList.getAt(0)?.data).toEqual('a');
      expect(linkedList.getAt(1)?.data).toEqual('b');
      expect(linkedList.getAt(2)?.data).toEqual('hi');
    });
  });

  describe('ForEach', () => {
    test('applies a transform to each node', () => {
      const linkedList = new LinkedList<number>();

      linkedList.insertLast(1);
      linkedList.insertLast(2);
      linkedList.insertLast(3);
      linkedList.insertLast(4);

      linkedList.forEach((node: Node<number>, _: number) => {
        node.data += 10;
      });

      expect(linkedList.getAt(0)?.data).toEqual(11);
      expect(linkedList.getAt(1)?.data).toEqual(12);
      expect(linkedList.getAt(2)?.data).toEqual(13);
      expect(linkedList.getAt(3)?.data).toEqual(14);
    });
  });

  describe('for...of loops', () => {
    test('works with the linked list', () => {
      const linkedList = new LinkedList<number>();

      linkedList.insertLast(1);
      linkedList.insertLast(2);
      linkedList.insertLast(3);
      linkedList.insertLast(4);

      for (let node of linkedList) {
        node.data += 10;
      }

      expect(linkedList.getAt(0)?.data).toEqual(11);
      expect(linkedList.getAt(1)?.data).toEqual(12);
      expect(linkedList.getAt(2)?.data).toEqual(13);
      expect(linkedList.getAt(3)?.data).toEqual(14);
    });

    test('for...of works on an empty list', () => {
      const linkedList = new LinkedList();
      expect(() => {
        for (let node of linkedList) {
        }
      }).not.toThrow();
    });
  });
});
