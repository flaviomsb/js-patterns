import { describe, test, expect } from '@jest/globals';
import User, { userInfo } from './prototype';

describe('User prototype', () => {
  const user = new User({
    first: 'John',
    last: 'Doe',
    email: 'johndoe@email.com',
  });

  test("check that userInfo is User's prototype", () => {
    expect(Object.getPrototypeOf(user) === userInfo).toBeTruthy();
  });

  test('user info show', () => {
    expect(user.show()).toEqual(
      `first: John
last: Doe
email: johndoe@email.com`,
    );
  });
});
