
export function sum(x) {
  return function (y) {
    return x + y;
  };
}

// Closure simmulating private methods
export function cart({
  subTotal = 0,
  tax = 9.8,
  shipping = 2.5,
  locale = 'en-US',
  currency = 'USD'
} = {}) {
  let taxed, shipped = false;
  let total = subTotal;

  function addUp(percent) {
    total += subTotal * (percent / 100);
  }

  function format() {
    return Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(total);
  }

  return {
    applyTax: function () {
      if (!taxed) {
        addUp(tax);
        taxed = true;
      }

      return this;
    },

    ship: function () {
      if (!shipped) {
        addUp(shipping);
        shipped = true;
      }

      return this;
    },

    grandTotal: function () {
      this.applyTax();
      this.ship();

      return format();
    },
  };
}
