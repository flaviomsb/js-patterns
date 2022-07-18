import Background from './Background';
import Bank from './Bank';
import CreditScore from './CreditScore';

class Mortgage {
  #borrower;

  constructor(borrower) {
    this.#borrower = borrower;
  }

  applyFor(amount) {
    const { clientYears, isEmployed, creditScore } = this.#borrower;

    const verified = Bank.verify({ clientYears, amount });
    const hasGoodScore = CreditScore.hasGoodScore(creditScore);
    const backgroundChecked = Background.check({ isEmployed, clientYears });

    const result = (verified && hasGoodScore && backgroundChecked) ? 'approved' : 'denied';
    const formattedAmount = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);

    return `${this.#borrower.name} has been ${result} for a ${formattedAmount} mortgage`;
  }
}

export default Mortgage;
