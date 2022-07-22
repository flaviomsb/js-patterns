const statMap = Object.freeze({
  1: 'avg',
  2: 'max',
  3: 'min',
});

class Stats {
  constructor(...data) {
    this.data = data;
  }

  get avg() {
    return this.data.reduce((sum, item) => sum + item, 0) / this.data.length;
  }

  get max() {
    return Math.max(...this.data);
  }

  get min() {
    return Math.min(...this.data);
  }

  [Symbol.iterator]() {
    let count = 0;
    return {
      next: () => ({
        done: count > 2,
        value: ++count && { [statMap[count]]: this[statMap[count]] },
      }),
    };
  }
}

export default Stats;
