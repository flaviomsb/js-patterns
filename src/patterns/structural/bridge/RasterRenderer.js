class RasterRenderer {
  constructor() {
    this.renderAs = 'pixels';
  }

  get whatToRenderAs() {
    return this.renderAs;
  }
}

export default RasterRenderer;
