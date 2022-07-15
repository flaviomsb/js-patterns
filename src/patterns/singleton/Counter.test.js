import Counter from './Counter';

describe('Counter', () => {
  test('same instance', () => {
    const instance1 = Counter.getInstance();
    const instance2 = Counter.getInstance();

    expect(instance1).toEqual(instance2);
  });

  test('increment', () => {
    Counter
      .increment()
      .increment()
      .increment();

    expect(Counter.getCount()).toBe(3);
  });

  test('decrement', () => {
    Counter
      .decrement()
      .decrement();

    expect(Counter.getCount()).toBe(1);
  });
});
