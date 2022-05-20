/* eslint-disable no-var */
/* eslint-disable vars-on-top */
function bubbleSort(...values) {
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

function selectionSort(...values) {
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

function insertionSort(...values) {
  const items = [...values];
  let temp;
  // Insertion sort start at 2nd item, hence i = 1
  for (let i = 1; i < items.length; i++) {
    temp = items[i]; // temp starts off as being the 2nd item's value
    for (var j = i - 1; items[j] > temp && j > -1; j--) {
      items[j + 1] = items[j];
    }
    // eslint-disable-next-line block-scoped-var
    items[j + 1] = temp;
  }

  return items;
}

function merge(arr1, arr2) {
  const combined = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i]);
      i++;
    } else {
      combined.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    combined.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    combined.push(arr2[j]);
    j++;
  }

  return combined;
}

function mergeSort(...values) {
  const items = [...values];

  if (items.length === 1) return items;

  const middle = Math.floor(items.length / 2);
  const left = items.slice(0, middle);
  const right = items.slice(middle);

  return merge(mergeSort(...left), mergeSort(...right));
}

function pivot(arr, pivotIndex = 0, endIndex = arr.length - 1) {
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

function quickSort(arr, left = 0, right = arr.length - 1) {
  let items = [...arr];
  if (left < right) {
    const [pivotIndex, sortedItems] = pivot(items, left, right);
    items = quickSort(sortedItems, left, pivotIndex - 1);
    items = quickSort(items, pivotIndex + 1, right);
  }
  return items;
}

export {
  bubbleSort,
  selectionSort,
  insertionSort,
  merge,
  mergeSort,
  pivot,
  quickSort,
};
