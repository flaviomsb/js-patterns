class Participant {
  constructor(mediator) {
    this.mediator = mediator;
    this.value = 0;
    mediator.event.subscribe(
      this.alert.bind(this),
    );
  }

  alert(sender, n) {
    if (sender !== this) {
      this.value += n;
    }
  }

  say(value) {
    this.mediator.broadcast(this, value);
  }
}

export default Participant;
