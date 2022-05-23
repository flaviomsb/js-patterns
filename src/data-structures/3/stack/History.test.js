import History from './History';

describe('History', () => {
  const history = new History('myapp.com');
  history.navigate('myapp.com/users');
  history.navigate('myapp.com/settings');

  test('goBack', () => {
    history.goBack();
    expect(history.data()).toMatchObject({
      current: 'myapp.com/users',
      back: ['myapp.com'],
      forward: ['myapp.com/settings'],
    });

    history.goBack();
    expect(history.data()).toMatchObject({
      current: 'myapp.com',
      back: [],
      forward: ['myapp.com/settings', 'myapp.com/users'],
    });
  });

  test('goForward', () => {
    history.goForward();
    expect(history.data()).toMatchObject({
      current: 'myapp.com/users',
      back: ['myapp.com'],
      forward: ['myapp.com/settings'],
    });

    history.goForward();
    expect(history.data()).toMatchObject({
      current: 'myapp.com/settings',
      back: ['myapp.com', 'myapp.com/users'],
      forward: [],
    });
  });
});
