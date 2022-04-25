import {
  users, isMale, isFemale, getAddress, getFullName,
} from './users';

describe('Filter, Map and Reduce', () => {
  test('map creates a new array populated with the results of calling a provided function on every element in the calling array', () => {
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

  test('filter creates a new array with all elements that pass the test implemented by the provided function', () => {
    const usersCount = users.length;
    const maleCount = users.filter(isMale).length;
    const femaleCount = users.filter(isFemale).length;

    expect(maleCount > 0 && maleCount < usersCount).toBeTruthy();
    expect(femaleCount > 0 && femaleCount < usersCount).toBeTruthy();
  });
});
