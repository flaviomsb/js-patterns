export default function swap(arr, index1, index2) {
  // eslint-disable-next-line no-param-reassign
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
