class Shape {
  constructor(renderer, name) {
    this.renderer = renderer;
    this.name = name;
  }

  toString() {
    return `Drawing ${this.name} as ${this.renderer.whatToRenderAs}`;
  }
}

export default Shape;
