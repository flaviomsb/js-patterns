describe('apply', () => {
  type User = {
    name: string;
  };

  it('must pass an array of parameters to apply', () => {
    const userA: User = {
      name: 'John Doe',
    };

    const userB: User = {
      name: 'Jeffrey Doe',
    };

    function greet(this: User, city: string) {
      return `Hi ${this.name}, welcome to ${city}!`;
    }

    expect(greet.apply(userA, ['Austin'])).toEqual('Hi John Doe, welcome to Austin!');
    expect(greet.apply(userB, ['Mexico City'])).toEqual('Hi Jeffrey Doe, welcome to Mexico City!');
  });
});

describe('call', () => {
  type Taxable = {
    tax: number;
  };

  it('must pass a list of parameters to call', () => {
    const usa: Taxable = {
      tax: 10.5,
    };

    const japan: Taxable = {
      tax: 8.9,
    };

    function calculateFee(this: Taxable, amount: number, locale: string, currency: string) {
      return Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount * (this.tax / 100));
    }

    expect(calculateFee.call(usa, 123.75, 'en-US', 'USD')).toEqual('$12.99');
    expect(calculateFee.call(japan, 123.75, 'ja-JP', 'JPY')).toEqual('￥11');
  });
});

describe('bind', () => {
  type Location = {
    city: string;
  };

  describe('must differentiate contexts', () => {
    function printLocation(this: Location) {
      return `You are in ${this.city}`;
    }

    const position1: Location = {
      city: 'Brussels',
    };

    const position2: Location = {
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
