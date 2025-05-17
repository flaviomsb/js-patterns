export default function insertionSort(...values) {
  const items = [...values];
  let temp;
  // Insertion sort start at 2nd item, hence i = 1
  for (let i = 1; i < items.length; i++) {
    temp = items[i]; // temp starts off as being the 2nd item's value
    for (var j = i - 1; items[j] > temp && j > -1; j--) {
      items[j + 1] = items[j];
    }

    items[j + 1] = temp;
  }

  return items;
}
