describe('regex exec', () => {
  test('exec', () => {
    const regex = /(?<year>\d{4})(?<month>\d{2})(?<day>\d{2})/;
    const match = regex.exec('Start date: 20220515, End date: 20220531');

    expect(match[0]).toEqual('20220515');
  });
});
