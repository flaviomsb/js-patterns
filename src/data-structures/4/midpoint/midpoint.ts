import LinkedList from '../linkedlist/LinkedList';

export default function midpoint(linkedList: LinkedList<string | number>) {
  let slow = linkedList.getFirst();
  let fast = linkedList.getFirst();

  while (slow?.next && fast?.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
