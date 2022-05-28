import stringifyNumbers from './stringifyNumbers';

describe('stringifyNumbers', () => {
  test('convert all numbers from nested object into strings', () => {
    const obj = {
      a: 5,
      b: {
        c: {
          d: 10,
        },
      },
      ids: [],
      factor: {
        payload: 1200,
        test: {
          lim: 231.7,
          params: {
            x: 902.44,
            y: 128,
          },
        },
      },
    };

    expect(stringifyNumbers(obj)).toMatchObject({
      a: '5',
      b: {
        c: {
          d: '10',
        },
      },
      ids: [],
      factor: {
        payload: '1200',
        test: {
          lim: '231.7',
          params: {
            x: '902.44',
            y: '128',
          },
        },
      },
    });
  });
});
