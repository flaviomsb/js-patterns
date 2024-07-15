import { HashTable } from './HashTable';

describe('HashTable', () => {
  test('HashTable is a class', () => {
    expect(typeof HashTable.prototype.constructor).toBe('function');
  });

  test('should set value into key', () => {
    const hash = new HashTable();

    hash.set('param1', true);
    hash.set('param2', [1, 2, 3]);
    hash.set('param3', 4928.3);

    expect(hash.get('param1')).toEqual(true);
    expect(hash.get('param2')).toMatchObject([1, 2, 3]);
    expect(hash.get('param3')).toEqual(4928.3);
  });

  test('should remove value set into a key', () => {
    const hash = new HashTable();

    hash.set('param', 3);
    expect(hash.get('param')).toEqual(3);

    hash.remove('param');
    expect(hash.get('param')).toBeUndefined();
  });

  test('should return a list of keys', () => {
    const hash = new HashTable();

    hash.set('key1', 23);
    hash.set('key2', '3out058agj');
    hash.set('key3', { a: 1, b: '38jf4' });

    expect(hash.keys()).toMatchObject(['key1', 'key2', 'key3']);
  });

  test('should return a list of values', () => {
    const hash = new HashTable();

    hash.set('key1', 23);
    hash.set('key2', '3out058agj');
    hash.set('key3', { a: 1, b: '38jf4' });

    expect(hash.values()).toMatchObject([23, '3out058agj', { a: 1, b: '38jf4' }]);
  });
});
