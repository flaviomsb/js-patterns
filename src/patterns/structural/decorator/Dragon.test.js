import { describe, test, expect } from '@jest/globals';
import Dragon from './Dragon';

describe('Decorator pattern', () => {
  test('should let dragon fly or crawl', () => {
    const dragon = new Dragon();

    expect(dragon.fly()).toEqual('flying');
    expect(dragon.crawl()).toEqual('too young');

    dragon.age = 20;

    expect(dragon.fly()).toEqual('too old');
    expect(dragon.crawl()).toEqual('crawling');
  });
});
