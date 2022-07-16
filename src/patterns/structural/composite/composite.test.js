import ManyValues from './ManyValues';
import SingleValue from './SingleValue';

const sum = (containers) => {
  let result = 0;
  for (const c of containers) {
    for (const i of c) {
      result += i;
    }
  }
  return result;
};

describe('composite', () => {
  test('should sum up different objects', () => {
    const singleValue = new SingleValue(11);
    const otherValues = new ManyValues();
    otherValues.push(22);
    otherValues.push(33);

    expect(sum([singleValue, otherValues])).toEqual(66);
  });
});
