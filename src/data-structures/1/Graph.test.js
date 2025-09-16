import { describe, test, expect } from '@jest/globals';
import Graph from './Graph';

describe('Graph', () => {
  test('add vertex', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('X');
    graph.addVertex('Z');

    expect(graph.adjacencyList).toMatchObject({
      A: [],
      X: [],
      Z: [],
    });
  });

  test('cannot duplicate vertices', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');

    expect(graph.addVertex('A')).toBeFalsy();
    expect(graph.adjacencyList).toMatchObject({
      A: [],
      B: [],
    });
  });

  test('add edge', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    expect(graph.addEdge('A', 'B')).toMatchObject({ A: ['B'] });
    expect(graph.addEdge('B', 'C')).toMatchObject({ B: ['A', 'C'] });
    expect(graph.addEdge('A', 'C')).toMatchObject({ C: ['B', 'A'] });
  });

  test('cannot add edge when one of the vertices does not exist', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');

    expect(() => graph.addEdge('A', 'C')).toThrow('Vertex "C" does not exist');
  });

  test('remove edge', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');

    expect(graph.addEdge('A', 'B')).toMatchObject({ A: ['B'] });
    expect(graph.addEdge('B', 'C')).toMatchObject({ B: ['A', 'C'] });
    expect(graph.addEdge('A', 'C')).toMatchObject({ C: ['B', 'A'] });
  });

  test('cannot remove edge from a vertex that does not exist', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('X');
    graph.addEdge('A', 'X');

    expect(() => graph.removeEdge('A', 'Z')).toThrow(
      'Vertex "Z" does not exist',
    );
  });

  test('remove vertex', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('A', 'C');

    expect(graph.removeVertex('B')).toMatchObject({
      adjacencyList: { A: ['C'], C: ['A'] },
    });
    expect(graph.removeVertex('C')).toMatchObject({ adjacencyList: { A: [] } });
  });
});
