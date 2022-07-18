class CreditScore {
  static hasGoodScore(creditScore) {
    if (creditScore >= 650) {
      return true;
    }

    return false;
  }
}

export default CreditScore;
