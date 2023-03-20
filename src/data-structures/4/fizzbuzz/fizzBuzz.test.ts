import fizzBuzz, { fizzBuzzFp } from './fizzBuzz';

describe('Fizz buzz', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    (console.log as jest.Mock).mockRestore();
  });

  test('fizzBuzz functions to be defined', () => {
    expect(fizzBuzz).toBeDefined();
    expect(fizzBuzzFp).toBeDefined();
  });

  test('Calling fizzBuzz with `5` prints out 5 statements', () => {
    fizzBuzz(5);
    expect((console.log as jest.Mock).mock.calls.length).toEqual(5);
  });

  test('Calling fizzBuzzFp with `15` prints out 15 statements', () => {
    fizzBuzzFp(15);
    expect((console.log as jest.Mock).mock.calls.length).toEqual(15);
  });

  test('Calling fizzbuzz with 15 prints out the correct values', () => {
    fizzBuzz(15);

    expect((console.log as jest.Mock).mock.calls[0][0]).toEqual(1);
    expect((console.log as jest.Mock).mock.calls[1][0]).toEqual(2);
    expect((console.log as jest.Mock).mock.calls[2][0]).toEqual('fizz');
    expect((console.log as jest.Mock).mock.calls[3][0]).toEqual(4);
    expect((console.log as jest.Mock).mock.calls[4][0]).toEqual('buzz');
    expect((console.log as jest.Mock).mock.calls[5][0]).toEqual('fizz');
    expect((console.log as jest.Mock).mock.calls[6][0]).toEqual(7);
    expect((console.log as jest.Mock).mock.calls[7][0]).toEqual(8);
    expect((console.log as jest.Mock).mock.calls[8][0]).toEqual('fizz');
    expect((console.log as jest.Mock).mock.calls[9][0]).toEqual('buzz');
    expect((console.log as jest.Mock).mock.calls[10][0]).toEqual(11);
    expect((console.log as jest.Mock).mock.calls[11][0]).toEqual('fizz');
    expect((console.log as jest.Mock).mock.calls[12][0]).toEqual(13);
    expect((console.log as jest.Mock).mock.calls[13][0]).toEqual(14);
    expect((console.log as jest.Mock).mock.calls[14][0]).toEqual('fizzbuzz');
  });
});
