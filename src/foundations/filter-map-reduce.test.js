import {
  users,
  isMale,
  isFemale,
  getAddress,
  getFullName,
  mockSalary,
} from './users';

describe('Filter, Map and Reduce', () => {
  test(`map creates a new array populated with the results
    of calling a provided function on every element in the calling array`, () => {
    const addresses = users
      .slice(0, 2)
      .map((user) => ({ ...getFullName(user), ...getAddress(user) }));

    expect(addresses).toMatchObject([
      {
        fullName: 'Miss Melany Wijngaard',
        address: '2431 predikherenkerkhof, Staphorst, Gelderland, 64265',
      },
      {
        fullName: 'Ms Nanna Pedersen',
        address: '2177 fåborgvej, Aarhus, Syddanmark, 87547',
      },
    ]);
  });

  test(`filter creates a new array with all elements that
    pass the test implemented by the provided function`, () => {
    const usersCount = users.length;
    const maleCount = users.filter(isMale).length;
    const femaleCount = users.filter(isFemale).length;

    expect(maleCount > 0 && maleCount < usersCount).toBeTruthy();
    expect(femaleCount > 0 && femaleCount < usersCount).toBeTruthy();
  });

  test('reduce executes a user-supplied "reducer" callback function on each element of the array', () => {
    const min = 85000;
    const max = 197239;
    const salariesTotal = users
      .map((user) => ({ ...user, salary: mockSalary({ min, max }) }))
      .reduce((previous, { salary }) => previous + salary, 0);

    expect(salariesTotal).not.toBeNaN();
    expect(salariesTotal).toBeGreaterThan(users.length * min);
    expect(salariesTotal).toBeLessThan(users.length * max);
  });
});
