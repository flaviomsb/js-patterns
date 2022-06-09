describe('regex match', () => {
  test('finding first digit index at string', () => {
    const match = 'zip code 98023. Phone number 555-5555'.match(/\d+/);

    expect(match[0]).toBe('98023');
  });

  test('finding all digits in a string text with /g option', () => {
    expect('My zip code is 57829 and my phone number is 512-879-1721'.match(/\d+/g))
      .toMatchObject(['57829', '512', '879', '1721']);
  });

  test('finding digits with matchAll', () => {
    const foundNumbers = [];
    const matchAll = 'My zip code is 57829 and my phone number is 512-879-1721'.matchAll(/\d+/g);

    for (const res of matchAll) {
      if (Number(res[0])) foundNumbers.push(res[0]);
    }

    expect(foundNumbers).toMatchObject(['57829', '512', '879', '1721']);
  });
});
