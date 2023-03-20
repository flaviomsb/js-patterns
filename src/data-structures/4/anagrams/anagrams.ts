export default function anagrams(firstStr: string, secondStr: string): boolean {
  function cleanString(str: string) {
    return str.replace(/[^\w]/g, '').split('').sort().join('');
  }

  return cleanString(firstStr) === cleanString(secondStr);
}
