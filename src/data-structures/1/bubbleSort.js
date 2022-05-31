export default function bubbleSort(...values) {
  const items = [...values];
  for (let i = items.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (items[j] > items[j + 1]) {
        const temp = items[j];
        items[j] = items[j + 1];
        items[j + 1] = temp;
      }
    }
  }

  return items;
}
