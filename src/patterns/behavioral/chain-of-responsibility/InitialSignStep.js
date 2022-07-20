import ContractSignStep from './ContractSignStep';

class InitialSignStep extends ContractSignStep {
  constructor(contract, buyer, seller) {
    super(contract);
    this.buyer = buyer;
    this.seller = seller;
  }

  handle() {
    this.contract
      .addSignature({ buyer: this.buyer })
      .addSignature({ seller: this.seller });
    super.handle();
  }
}

export default InitialSignStep;
