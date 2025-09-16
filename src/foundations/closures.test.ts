import { describe, test, expect } from '@jest/globals';
import { sum, cart } from './closures';

describe('closures', () => {
  describe('sum', () => {
    test('two plus two must be four', () => {
      expect(sum(2)(2)).toBe(4);
    });
  });

  describe('cart', () => {
    test('cart grand total', () => {
      const total = cart({ subTotal: 120.4 }).grandTotal();
      expect(total).toEqual('$135.21');
    });

    test('must not tax twice', () => {
      const total = cart({ subTotal: 120.4 }).applyTax().grandTotal();
      expect(total).toEqual('$135.21');
    });

    test('must not ship twice', () => {
      const total = cart({ subTotal: 120.4 }).ship().grandTotal();
      expect(total).toEqual('$135.21');
    });

    test('must display German formatting for de-DE locale', () => {
      const total = cart({
        subTotal: 120.4,
        locale: 'de-DE',
        currency: 'EUR',
      }).grandTotal();
      expect(total).toEqual('135,21 €');
    });

    test('must demonstrate that each cart has its own state', () => {
      expect(cart({ subTotal: 140.5 }).grandTotal()).toEqual('$157.78');
      expect(cart({ subTotal: 1543.23 }).grandTotal()).toEqual('$1,733.05');
    });
  });
});
