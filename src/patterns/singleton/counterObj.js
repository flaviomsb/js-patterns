let count = 0;

const counterObj = {
  increment() {
    count += 1;
    return this;
  },

  decrement() {
    count -= 1;
    return this;
  },

  getCount() {
    return count;
  },
};

Object.freeze(counterObj);

export default counterObj;
