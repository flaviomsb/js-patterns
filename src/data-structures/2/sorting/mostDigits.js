import digitCount from './digitCount';

export default function mostDigits(arr) {
  let most = 0;
  for (let i = 0; i < arr.length; i++) {
    most = Math.max(most, digitCount(arr[i]));
  }
  return most;
}
