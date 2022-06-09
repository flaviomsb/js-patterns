describe('regex replace', () => {
  const text = 'Deliver date: 20220603, Purchase date: 20220601';
  const regex = /(?<year>\d{4})(?<month>\d{2})(?<day>\d{2})/g;

  test('replace matches with a replace pattern', () => {
    const replacePattern = '$<month>-$<day>-$<year>';

    expect(text.replace(regex, replacePattern)).toEqual('Deliver date: 06-03-2022, Purchase date: 06-01-2022');
  });

  test('replace matches with a replace pattern as callback', () => {
    const replacePattern = (match, year, month, day) => `${month}/${day}/${year}`;

    expect(text.replace(regex, replacePattern)).toEqual('Deliver date: 06/03/2022, Purchase date: 06/01/2022');
  });
});
