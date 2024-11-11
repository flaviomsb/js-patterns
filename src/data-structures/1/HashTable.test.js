import { describe, test, expect } from '@jest/globals';
import HashTable from './HashTable';

describe('Hash Table', () => {
  test('constructor default data map size', () => {
    const hashTable = new HashTable();
    expect(hashTable.dataMap.length).toBe(7);
  });

  test('get / set', () => {
    const hashTable = new HashTable();
    hashTable.set('plane', '737');
    hashTable.set('plane', 'A320');
    hashTable.set('car', 'Tesla Model S');
    hashTable.set('motorcycle', '1200 RR');

    expect(hashTable.get('plane')).toBe('737');
    expect(hashTable.get('car')).toBe('Tesla Model S');
    expect(hashTable.get('motorcycle')).toBe('1200 RR');
    expect(hashTable.get('boat')).toBeUndefined();
  });

  test('keys', () => {
    const hashTable = new HashTable();
    hashTable.set('first_name', 'John');
    hashTable.set('last_name', 'Doe');
    hashTable.set('email', 'john.doe@email.com');

    expect(hashTable.keys().sort()).toMatchObject(['first_name', 'last_name', 'email'].sort());
  });
});
