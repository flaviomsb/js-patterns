describe('apply', () => {
  it('must pass an array of parameters to apply', () => {
    const userA = {
      name: 'John Doe',
    };

    const userB = {
      name: 'Jeffrey Doe',
    };

    const greet = function (city) {
      return `Hi ${this.name}, welcome to ${city}!`;
    };

    expect(greet.apply(userA, ['Austin'])).toEqual('Hi John Doe, welcome to Austin!');
    expect(greet.apply(userB, ['Mexico City'])).toEqual('Hi Jeffrey Doe, welcome to Mexico City!');
  });
});

describe('call', () => {
  it('must pass a list of parameters to call', () => {
    const usa = {
      tax: 10.5,
    };

    const japan = {
      tax: 8.9,
    };

    const calcFee = function (amount, locale, currency) {
      return Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount * (this.tax / 100));
    };

    expect(calcFee.call(usa, 123.75, 'en-US', 'USD')).toEqual('$12.99');
    expect(calcFee.call(japan, 123.75, 'ja-JP', 'JPY')).toEqual('￥11');
  });
});

describe('bind', () => {
  describe('must differentiate contexts', () => {
    const printLocation = function () {
      return `You are in ${this.city}`;
    };

    const position1 = {
      city: 'Brussels',
    };

    const position2 = {
      city: 'Antwerpen',
    };

    it.each([
      ['Brussels', position1],
      ['Antwerpen', position2],
    ])('in %s', (city, position) => {
      const inLocation = printLocation.bind(position);
      expect(inLocation()).toEqual(`You are in ${city}`);
    });
  });
});