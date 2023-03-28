import QueueArray from './QueueArray';

describe('QueueArray', () => {
  const queue = new QueueArray();

  test('enqueue', () => {
    queue.enqueue('Austin', 'Dallas', 'Houston');
    expect(queue.size()).toBe(3);
  });

  test('toString', () => {
    expect(queue.toString()).toEqual('Austin,Dallas,Houston');
  });

  test('front', () => {
    expect(queue.front()).toEqual('Austin');
  });

  test('dequeue', () => {
    expect(queue.dequeue()).toEqual('Austin');
    expect(queue.size()).toEqual(2);
  });

  test('isEmpty', () => {
    queue.clear();
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('fromValues', () => {
    expect(QueueArray.fromValues(1, 2, 3).toString()).toEqual('1,2,3');
  });
});
