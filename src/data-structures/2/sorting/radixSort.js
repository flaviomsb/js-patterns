import getDigit from './getDigit';
import mostDigits from './mostDigits';

export default function radixSort(arr) {
  let newArr = [...arr];
  const maxDigitCount = mostDigits(newArr);

  for (let i = 0; i < maxDigitCount; i++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < newArr.length; j++) {
      const digit = getDigit(newArr[j], i);
      digitBuckets[digit].push(newArr[j]);
    }
    newArr = [].concat(...digitBuckets);
  }

  return newArr;
}
