export default function shortestDistance(words: string[], w1: string, w2: string): number {
  if (!w1 || !w2 || !words.includes(w1) || !words.includes(w2)) {
    return 0;
  }

  if (w1 === w2) {
    return 0;
  }

  let pos1 = -1;
  let pos2 = -1;
  let distance = words.length;
  for (const [index, word] of words.entries()) {
    if (word === w1) {
      pos1 = index;
    } else if (word === w2) {
      pos2 = index;
    }

    if (pos1 !== -1 && pos2 !== -1) {
      distance = Math.min(distance, Math.abs(pos2 - pos1));
    }
  }

  return distance;
}
