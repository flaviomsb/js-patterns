class ContractSignStep {
  constructor(contract) {
    this.contract = contract;
    this.next = null;
  }

  add(step) {
    if (this.next) {
      this.next.add(step);
    } else {
      this.next = step;
    }
  }

  handle() {
    if (this.next) this.next.handle();
  }
}

export default ContractSignStep;
