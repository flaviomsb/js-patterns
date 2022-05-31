export default function selectionSort(...values) {
  const items = [...values];
  let min;
  for (let i = 0; i < items.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < items.length; j++) {
      /**
       * The main difference with previous bubble sort is that
       * selection sort keeps track of the index of minimum value
       */
      if (items[j] < items[min]) min = j;
    }

    if (i !== min) {
      const temp = items[i];
      items[i] = items[min];
      items[min] = temp;
    }
  }

  return items;
}
