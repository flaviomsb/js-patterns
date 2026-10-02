const isVowel = (char: string) =>
  ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);

export function reverseVowelsFunctional(str: string): string {
  if (!str) {
    return '';
  }

  const vowelsStack = str.split('').reverse().filter(isVowel);

  return str
    .split('')
    .map((c) => (isVowel(c) ? (vowelsStack.shift() as string) : c))
    .join('');
}

export function reverseVowels(str: string): string {
  // static string "vowels" that contains all lowercase and uppercase vowels
  const vowels = 'aeiouAEIOU';
  // The first and last pointers are initialized to the start and end of the string, respectively
  let first = 0;
  let last = str.length - 1;
  // Turn the input string 's' to a character array 'array' 
  // to allow easy manipulation of individual characters
  const strArray = str.split('');

  // enter a while loop that continues while 'first' is less than 'last'.
  while (first < last) {
    // The first nested while loop keeps incrementing the 'first' pointer until
    // it points to a vowel or 'first' is no longer less than 'last'.
    while (first < last && vowels.indexOf(strArray[first]) === -1) {
      first++;
    }

    // The second nested while loop keeps decrementing the 'last' pointer until
    // it points to a vowel or 'first' is no longer less than 'last'.
    while (first < last && vowels.indexOf(strArray[last]) === -1) {
      last--;
    }

    // both pointers sit on a vowel
    [strArray[first], strArray[last]] = [strArray[last], strArray[first]];

    // both pointers now sit on a vowel, or have met, so swapping is safe either way
    // move the pointers towards the center
    first++;
    last--;
  }

  return strArray.join('');
}
