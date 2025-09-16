import PriorityItem from './PriorityItem';

class PriorityQueue {
  #items = [];

  enqueue(...newItems) {
    newItems.forEach((newItem) => {
      if (!(newItem instanceof PriorityItem)) {
        throw new Error(`cannot read priority from item: ${newItem}`);
      }

      let prioritized = false;
      for (let i = 0; i < this.#items.length; i++) {
        if (newItem.getPriority() < this.#items[i].getPriority()) {
          this.#items.splice(i, 0, newItem);
          prioritized = true;
          break;
        }
      }

      if (!prioritized) {
        this.#items.push(newItem);
      }
    });

    return this;
  }

  dequeue() {
    return this.#items.shift();
  }

  size() {
    return this.#items.length;
  }

  front() {
    return this.#items[0];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  toString() {
    return this.#items.toString();
  }

  clear() {
    this.#items = [];
  }
}

export default PriorityQueue;
