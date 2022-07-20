import ContractSignStep from './ContractSignStep';

class NotaryPublicSignStep extends ContractSignStep {
  constructor(contract, notary) {
    super(contract);
    this.notary = notary;
  }

  handle() {
    this.contract
      .addSignature({ notary: this.notary });
    super.handle();
  }
}

export default NotaryPublicSignStep;
