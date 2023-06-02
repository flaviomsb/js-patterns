import Queue from '../queue/Queue';

export default function weave<T>(queueOne: Queue<T>, queueTwo: Queue<T>): Queue<T> {
  const queue = new Queue<T>();

  while (queueOne.peek() || queueTwo.peek()) {
    if (queueOne.peek()) {
      queue.add(queueOne.remove());
    }

    if (queueTwo.peek()) {
      queue.add(queueTwo.remove());
    }
  }

  return queue;
}
