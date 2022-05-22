class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Add new vertex to the adjacency list
   * @param {*} vertex
   * @returns {boolean}
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }

    return false;
  }

  /**
   * Add edge between vertices
   * @param {*} vertex1
   * @param {*} vertex2
   * @returns {Object}
   * @throws {Error}
   */
  addEdge(vertex1, vertex2) {
    return this.#handleEdge(vertex1, vertex2, () => {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return this.adjacencyList;
    });
  }

  /**
   * Add edge between vertices
   * @param {*} vertex1
   * @param {*} vertex2
   * @returns {Object}
   * @throws {Error}
   */
  removeEdge(vertex1, vertex2) {
    return this.#handleEdge(vertex1, vertex2, () => {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
      return this.adjacencyList;
    });
  }

  /**
   * Remove an existing vertex from the adjacency list
   * @param {*} vertex
   * @returns {Graph}
   */
  removeVertex(vertex) {
    this.#validateVertex(vertex);

    while (this.adjacencyList[vertex].length) {
      const temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];

    return this;
  }

  /**
   * Execute an operation on edge
   * @param {*} vertex1
   * @param {*} vertex2
   * @returns {Object}
   * @throws {Error}
   */
  #handleEdge(vertex1, vertex2, fn) {
    this.#validateVertex(vertex1);
    this.#validateVertex(vertex2);

    return fn();
  }

  #validateVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      throw new Error(`Vertex "${vertex}" does not exist`);
    }
  }
}

export default Graph;
