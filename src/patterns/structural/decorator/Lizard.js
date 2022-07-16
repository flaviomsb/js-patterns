class Lizard {
  #age;

  constructor(age = 0) {
    this.#age = age;
  }

  set age(value) {
    this.#age = value;
  }

  crawl() {
    return this.#age > 1 ? 'crawling' : 'too young';
  }
}

export default Lizard;
