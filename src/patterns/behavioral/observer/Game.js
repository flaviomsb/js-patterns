import Event from '../Event';

class Game {
  constructor() {
    this.ratEnters = new Event();
    this.ratDies = new Event();
    this.notifyRat = new Event();
  }

  fireRatEnters(sender) {
    this.ratEnters.fire(sender, null);
  }

  fireRatDies(sender) {
    this.ratDies.fire(sender, null);
  }

  fireNotifyRat(sender, whichRat) {
    this.notifyRat.fire(sender, whichRat);
  }
}

export default Game;
