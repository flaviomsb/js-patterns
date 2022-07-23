import reverse, { reverseAsArray, reverseForLoop, reverseForOfLoop } from './reverse';

describe('String reversal', () => {
  test('reverse', () => {
    expect(reverse('John')).toEqual('nhoJ');
    expect(reverseAsArray('Maurice')).toEqual('eciruaM');
    expect(reverseForLoop('Austin')).toEqual('nitsuA');
    expect(reverseForOfLoop('Austin')).toEqual('nitsuA');
  });
});
