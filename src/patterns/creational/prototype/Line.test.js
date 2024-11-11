import { describe, test, expect } from '@jest/globals';
import Line from './Line';
import Point from './Point';

describe('Prototype', () => {
  test('test', () => {
    const line1 = new Line(
      new Point(3, 3),
      new Point(10, 10),
    );

    const line2 = line1.deepCopy();
    line1.start.x = 0;
    line1.end.x = 0;
    line1.end.x = 0;
    line1.end.y = 0;

    expect(line2.start.x).toEqual(3);
    expect(line2.start.y).toEqual(3);
    expect(line2.end.x).toEqual(10);
    expect(line2.end.y).toEqual(10);
  });
});
