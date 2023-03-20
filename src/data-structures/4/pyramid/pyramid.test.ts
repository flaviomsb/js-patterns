import pyramid from './pyramid';

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => jest.fn());
});

afterEach(() => {
  (console.log as jest.Mock).mockRestore();
});

test('pyramid is a function', () => {
  expect(typeof pyramid).toEqual('function');
});

test('prints a pryamid for n = 2', () => {
  pyramid(2);
  expect((console.log as jest.Mock).mock.calls[0][0]).toEqual(' # ');
  expect((console.log as jest.Mock).mock.calls[1][0]).toEqual('###');
  expect((console.log as jest.Mock).mock.calls.length).toEqual(2);
});

test('prints a pryamid for n = 3', () => {
  pyramid(3);
  expect((console.log as jest.Mock).mock.calls[0][0]).toEqual('  #  ');
  expect((console.log as jest.Mock).mock.calls[1][0]).toEqual(' ### ');
  expect((console.log as jest.Mock).mock.calls[2][0]).toEqual('#####');
  expect((console.log as jest.Mock).mock.calls.length).toEqual(3);
});

test('prints a pryamid for n = 4', () => {
  pyramid(4);
  expect((console.log as jest.Mock).mock.calls[0][0]).toEqual('   #   ');
  expect((console.log as jest.Mock).mock.calls[1][0]).toEqual('  ###  ');
  expect((console.log as jest.Mock).mock.calls[2][0]).toEqual(' ##### ');
  expect((console.log as jest.Mock).mock.calls[3][0]).toEqual('#######');
  expect((console.log as jest.Mock).mock.calls.length).toEqual(4);
});
