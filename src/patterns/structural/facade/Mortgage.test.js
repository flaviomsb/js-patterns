import { describe, test, expect } from '@jest/globals';
import Borrower from './Borrower';
import Mortgage from './Mortgage';

describe('Facade pattern', () => {
  test('Mortgage approved', () => {
    const borrower = new Borrower({
      name: 'John Doe',
      creditScore: 689,
      isEmployed: true,
      clientYears: 5,
    });
    const mortgage = new Mortgage(borrower);

    expect(mortgage.applyFor(175_000)).toEqual(
      'John Doe has been approved for a $175,000.00 mortgage',
    );
  });

  test('Mortgage denied', () => {
    const borrower = new Borrower({
      name: 'Jesse Doe',
      creditScore: 575,
      isEmployed: true,
      clientYears: 1,
    });
    const mortgage = new Mortgage(borrower);

    expect(mortgage.applyFor(350_000)).toEqual(
      'Jesse Doe has been denied for a $350,000.00 mortgage',
    );
  });
});
