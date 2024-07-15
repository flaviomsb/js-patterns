export class HashTable {
  protected keyMap: any[];

  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  // Method to set a key-value pair in the hash table
  public set(key: string, value: any): void {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  // Method to get the value associated with a key
  public get(key: string): any {
    const index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // Method to remove a key-value pair from the hash table
  public remove(key: string): boolean {
    const index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          this.keyMap[index].splice(i, 1);
          return true;
        }
      }
    }
    return false;
  }

  // Method to get all the keys in the hash table
  public keys(): string[] {
    const keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArray.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArray;
  }

  // Method to get all the values in the hash table
  public values(): any[] {
    const valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArray.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArray;
  }

  // Hash function to convert keys into array indices
  private hash(key: string): number {
    let total = 0;
    const PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }
    return total;
  }
}