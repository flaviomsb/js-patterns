class Singleton {
  constructor() {
    const instance = this.constructor.instancel;

    if (instance) {
      // eslint-disable-next-line no-constructor-return
      return instance;
    }

    this.constructor.instance = this;
  }
}

export default Singleton;
