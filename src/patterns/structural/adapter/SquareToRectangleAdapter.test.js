import { describe, test, expect } from '@jest/globals';
import Square from './Square';
import SquareToRectangleAdapter from './SquareToRectangleAdapter';

function area({ width, height }) {
  return width * height;
}

describe('Adapter', () => {
  test('use adapter to conform to rectangle area calculation', () => {
    const square = new Square(20);
    const adapter = new SquareToRectangleAdapter(square);

    expect(area(adapter)).toEqual(400);
  });
});
