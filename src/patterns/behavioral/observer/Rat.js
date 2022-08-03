class Rat {
  constructor(game) {
    this.game = game;
    this.attack = 1;
    game.ratEnters.subscribe(
      this.handleRatEnters.bind(this),
    );
    game.ratDies.subscribe(
      this.handleRatDies.bind(this),
    );
    game.notifyRat.subscribe(
      this.handleNotifyRat.bind(this),
    );
    game.fireRatEnters(this);
  }

  handleRatEnters(sender) {
    if (sender !== this) {
      this.attack += 1;
      this.game.fireNotifyRat(this, sender);
    }
  }

  handleRatDies() {
    this.attack -= 1;
  }

  handleNotifyRat(_sender, whichRat) {
    if (whichRat === this) this.attack += 1;
  }

  die() {
    this.game.fireRatDies(this);
  }
}

export default Rat;
