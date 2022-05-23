import StackArray from './StackArray';

const BASE_BINARY = 2;
const BASE_OCTAL = 8;
const BASE_HEX = 16;

class BaseConverter {
  static #convert(decaNumber, base) {
    const digits = '0123456789ABCDEF';
    const reminderStack = new StackArray();
    let reminder;
    let result = '';
    let temp = decaNumber;

    while (temp > 0) {
      reminder = Math.floor(temp % base);
      reminderStack.push(reminder);
      temp = Math.floor(temp / base);
    }

    while (!reminderStack.isEmpty()) {
      result += digits[reminderStack.pop()];
    }

    return result;
  }

  static decimalToBinary(decaNumber) {
    return this.#convert(decaNumber, BASE_BINARY);
  }

  static decimalToOctal(decaNumber) {
    return this.#convert(decaNumber, BASE_OCTAL);
  }

  static decimalToHex(decaNumber) {
    return this.#convert(decaNumber, BASE_HEX);
  }
}

export default BaseConverter;
