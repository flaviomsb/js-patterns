export default function getDigit(num, place) {
  return Math.floor(Math.abs(num) / 10 ** place) % 10;
}
