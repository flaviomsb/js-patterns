import Event from './Event';

class Mediator {
  constructor() {
    this.event = new Event();
  }

  broadcast(from, value) {
    this.event.fire(from, value);
  }
}

export default Mediator;
