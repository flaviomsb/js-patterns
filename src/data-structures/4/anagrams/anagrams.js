export default function anagrams(firstStr, secondStr) {
  function cleanString(str) {
    return str.replace(/[^\w]/g, '').split('').sort().join('');
  }

  return cleanString(firstStr) === cleanString(secondStr);
}
