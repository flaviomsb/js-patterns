describe('regex groups', () => {
  test('finding a date pattern using match and regex /(\\d{4})(\\d{2})(\\d{2})/g', () => {
    const match = 'Deliver date: 20220603'.match(/(\d{4})(\d{2})(\d{2})/g);

    expect(match).toMatchObject(['20220603']);
  });

  test('finding a date pattern using matchAll and regex /(\\d{4})(\\d{2})(\\d{2})/g', () => {
    const matchAll = 'Deliver date: 20220603'.matchAll(
      /(\d{4})(\d{2})(\d{2})/g,
    );

    for (const match of matchAll) {
      expect(match[0]).toEqual('20220603');
      expect(match[1]).toEqual('2022');
      expect(match[2]).toEqual('06');
      expect(match[3]).toEqual('03');
    }
  });

  test(`finding a date pattern using matchAll
    and regex named groups /(?<year>\\d{4})(?<month>\\d{2})(?<day>\\d{2})/g`, () => {
    const matchAll = 'Deliver date: 20220603'.matchAll(
      /(?<year>\d{4})(?<month>\d{2})(?<day>\d{2})/g,
    );

    for (const match of matchAll) {
      const { year, month, day } = match.groups;
      expect(year).toEqual('2022');
      expect(month).toEqual('06');
      expect(day).toEqual('03');
    }
  });
});
