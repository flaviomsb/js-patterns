export function pivot(arr, pivotIndex = 0, endIndex = arr.length - 1) {
  const items = [...arr];

  function swap(firstIndex, secondIndex) {
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
  }

  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (items[i] < items[pivotIndex]) {
      swapIndex++;
      swap(swapIndex, i);
    }
  }
  swap(pivotIndex, swapIndex);

  return [swapIndex, items];
}

export default function quickSort(arr, left = 0, right = arr.length - 1) {
  let items = [...arr];
  if (left < right) {
    const [pivotIndex, sortedItems] = pivot(items, left, right);
    items = quickSort(sortedItems, left, pivotIndex - 1);
    items = quickSort(items, pivotIndex + 1, right);
  }
  return items;
}
