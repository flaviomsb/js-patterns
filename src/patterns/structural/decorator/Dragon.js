import Bird from './Bird';
import Lizard from './Lizard';

class Dragon {
  #age;

  constructor(age = 0) {
    this.bird = new Bird(age);
    this.lizard = new Lizard(age);
    this.#age = age;
  }

  set age(age) {
    this.bird.age = age;
    this.lizard.age = age;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  fly() {
    return this.bird.fly();
  }

  crawl() {
    return this.lizard.crawl();
  }
}

export default Dragon;
