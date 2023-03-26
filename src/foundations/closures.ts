export function sum(x: number) {
  return (y: number) => x + y;
}

// Closure simmulating private methods
export function cart({
  subTotal = 0,
  tax = 9.8,
  shipping = 2.5,
  locale = 'en-US',
  currency = 'USD',
} = {}) {
  let taxed: boolean;
  let shipped = false;
  let total = subTotal;

  function addUp(percent: number) {
    total += subTotal * (percent / 100);
  }

  function format() {
    return Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(total);
  }

  return {
    applyTax() {
      if (!taxed) {
        addUp(tax);
        taxed = true;
      }

      return this;
    },

    ship() {
      if (!shipped) {
        addUp(shipping);
        shipped = true;
      }

      return this;
    },

    grandTotal() {
      this.applyTax();
      this.ship();

      return format();
    },
  };
}
