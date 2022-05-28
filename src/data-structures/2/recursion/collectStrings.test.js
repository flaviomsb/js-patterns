import collectStrings from './collectStrings';

describe('collectStrings', () => {
  test('Collect all strings from object and pack them into an array', () => {
    const obj = {
      part: 'door',
      seq: {
        a: 1424,
        specs: {
          color: 'blue',
          section: {
            zxy: 'carbon fiber',
          },
        },
      },
    };

    expect(collectStrings(obj)).toMatchObject(['door', 'blue', 'carbon fiber']);
  });
});
