export enum PriorityLevel {
  High,
  Medium,
  Low,
}

export class PriorityNode {
  public constructor(public value: number, public priority: PriorityLevel) {}
}