class Singleton {
  constructor() {
    const instance = this.constructor.instance;

    if (instance) {
      return;
    }

    this.constructor.instance = this;
  }
}

export default Singleton;
