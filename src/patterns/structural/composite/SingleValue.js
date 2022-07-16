class SingleValue {
  constructor(value) {
    this.value = value;
  }

  [Symbol.iterator]() {
    let returned = false;
    return {
      next: () => ({
        value: this.value,
        done: returned++,
      }),
    };
  }
}

export default SingleValue;
