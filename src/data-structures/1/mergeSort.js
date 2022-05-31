export function merge(arr1, arr2) {
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

export default function mergeSort(...values) {
  const items = [...values];

  if (items.length === 1) return items;

  const middle = Math.floor(items.length / 2);
  const left = items.slice(0, middle);
  const right = items.slice(middle);

  return merge(mergeSort(...left), mergeSort(...right));
}
