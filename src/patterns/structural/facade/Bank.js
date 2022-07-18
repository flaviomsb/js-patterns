class Bank {
  static verify({ clientYears, amount }) {
    if (clientYears > 2 && amount < 200_000) {
      return true;
    }

    return false;
  }
}

export default Bank;
