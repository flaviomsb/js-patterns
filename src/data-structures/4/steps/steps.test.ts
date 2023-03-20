import steps, { stepsAlt, stepsRecursive } from './steps';

describe('Steps', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    (console.log as jest.Mock).mockRestore();
  });

  test('steps is a function', () => {
    expect(typeof steps).toEqual('function');
  });

  test('stepsAlt is a function', () => {
    expect(typeof stepsAlt).toEqual('function');
  });

  test('stepsRecursive is a function', () => {
    expect(typeof stepsRecursive).toEqual('function');
  });

  test('steps called with n = 1', () => {
    steps(1);
    expect((console.log as jest.Mock).mock.calls[0][0]).toEqual('#');
    expect((console.log as jest.Mock).mock.calls.length).toEqual(1);
  });

  test('steps called with n = 2', () => {
    steps(2);
    expect((console.log as jest.Mock).mock.calls[0][0]).toEqual('# ');
    expect((console.log as jest.Mock).mock.calls[1][0]).toEqual('##');
    expect((console.log as jest.Mock).mock.calls.length).toEqual(2);
  });

  test('steps called with n = 3', () => {
    steps(3);
    expect((console.log as jest.Mock).mock.calls[0][0]).toEqual('#  ');
    expect((console.log as jest.Mock).mock.calls[1][0]).toEqual('## ');
    expect((console.log as jest.Mock).mock.calls[2][0]).toEqual('###');
    expect((console.log as jest.Mock).mock.calls.length).toEqual(3);
  });

  test('stepsAlt called with n = 3', () => {
    stepsAlt(3);
    expect((console.log as jest.Mock).mock.calls[0][0]).toEqual('#  ');
    expect((console.log as jest.Mock).mock.calls[1][0]).toEqual('## ');
    expect((console.log as jest.Mock).mock.calls[2][0]).toEqual('###');
    expect((console.log as jest.Mock).mock.calls.length).toEqual(3);
  });

  test('stepsRecursive called with n = 3', () => {
    stepsRecursive(3);
    expect((console.log as jest.Mock).mock.calls[0][0]).toEqual('#  ');
    expect((console.log as jest.Mock).mock.calls[1][0]).toEqual('## ');
    expect((console.log as jest.Mock).mock.calls[2][0]).toEqual('###');
    expect((console.log as jest.Mock).mock.calls.length).toEqual(3);
  });
});
