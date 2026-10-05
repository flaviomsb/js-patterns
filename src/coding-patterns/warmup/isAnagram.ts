export default function isAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }

  function buildMap(str: string) {
    return str
      .split('')
      .reduce(
        (map, char) => ({ ...map, [char]: char in map ? map[char] + 1 : 0 }),
        {} as Record<string, number>,
      );
  }

  const strMap1 = buildMap(str1);
  const strMap2 = buildMap(str2);

  for (const item in strMap1) {
    if (strMap1[item] !== strMap2[item]) {
      return false;
    }
  }

  return true;
}
