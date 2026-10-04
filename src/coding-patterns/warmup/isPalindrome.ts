export default function isPalindrome(raw: string): boolean {
  const sentence = raw.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (sentence === null || sentence === undefined) {
    return false;
  }

  if (sentence.length === 1 || sentence === '') {
    return true;
  }

  let start = 0;
  let end = sentence.length - 1;
  const middlePoint = end / 2;

  while (start < middlePoint && end > middlePoint) {
    if (sentence[start] !== sentence[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}
