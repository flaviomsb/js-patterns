import Game from './Game';
import Rat from './Rat';

describe('Observer pattern', () => {
  test('single rat test', () => {
    const game = new Game();
    const rat = new Rat(game);
    expect(rat.attack).toEqual(1);
  });

  test('two rat test', () => {
    const game = new Game();
    const rat = new Rat(game);
    const rat2 = new Rat(game);
    expect(rat.attack).toEqual(2);
    expect(rat2.attack).toEqual(2);
  });

  test('three rats one dies', () => {
    const game = new Game();

    const rat = new Rat(game);
    expect(rat.attack).toEqual(1);

    const rat2 = new Rat(game);
    expect(rat.attack).toEqual(2);
    expect(rat2.attack).toEqual(2);

    const rat3 = new Rat(game);
    expect(rat.attack).toEqual(3);
    expect(rat2.attack).toEqual(3);
    expect(rat3.attack).toEqual(3);
    rat3.die();

    expect(rat.attack).toEqual(2);
    expect(rat2.attack).toEqual(2);
  });
});
