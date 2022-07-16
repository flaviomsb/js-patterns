import Point from './Point';

class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  deepCopy() {
    const start = new Point(this.start.x, this.start.y);
    const end = new Point(this.end.x, this.end.y);

    return new Line(start, end);
  }
}

export default Line;
