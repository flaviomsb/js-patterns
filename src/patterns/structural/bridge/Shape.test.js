import { describe, test, expect } from '@jest/globals';
import RasterRenderer from './RasterRenderer';
import Square from './Square';
import Triangle from './Triangle';
import VectorRenderer from './VectorRenderer';

describe('Bridge pattern', () => {
  test('renderers', () => {
    const square = new Square(new VectorRenderer());
    expect(square.toString()).toEqual('Drawing square as lines');

    const triangle = new Triangle(new RasterRenderer());
    expect(triangle.toString()).toEqual('Drawing triangle as pixels');
  });
});
