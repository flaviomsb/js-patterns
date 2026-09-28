const alphabet = 'abcdefghijklmnopqrstuvwxyz';

export default function isPangram(sentence: string): boolean {
  // if no sentence return false
  if (!sentence || !sentence?.length) {
    return false;
  }

  // The challenge criteria requires any digit to mark sentence as non pangram
  if (/\d+/g.test(sentence)) {
    return false;
  }

  const normalizedSentence = sentence.toLowerCase();

  for (const char of alphabet) {
    if (!normalizedSentence.includes(char)) {
      return false;
    }
  }

  return true;
}
