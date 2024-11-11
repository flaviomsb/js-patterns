import { describe, test, expect } from '@jest/globals';
import reverseString, {
  reverseStringArray,
  reverseStringForLoop,
  reverseStringForOfLoop,
} from './reverseString';

describe('String reversal', () => {
  test('reverseString', () => {
    expect(reverseString('John')).toEqual('nhoJ');
  });

  test('reverseStringArray', () => {
    expect(reverseStringArray('Maurice')).toEqual('eciruaM');
  });

  test('reverseStringForLoop', () => {
    expect(reverseStringForLoop('Austin')).toEqual('nitsuA');
  });

  test('reverseStringForOfLoop', () => {
    expect(reverseStringForOfLoop('Austin')).toEqual('nitsuA');
  });
});
