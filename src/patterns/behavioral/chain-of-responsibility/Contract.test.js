import Contract from './Contract';
import ContractSignStep from './ContractSignStep';
import InitialSignStep from './InitialSignStep';
import NotaryPublicSignStep from './NotaryPublicSignStep';

describe('Chain of responsibility pattern', () => {
  test('contract steps', () => {
    const contract = new Contract();
    const steps = new ContractSignStep(contract);
    steps.add(new InitialSignStep(contract, 'John Doe', 'Rita Doe'));
    steps.add(new NotaryPublicSignStep(contract, 'Richard Doe'));
    steps.handle();

    expect(contract.signatures).toMatchObject([
      { buyer: 'John Doe' },
      { seller: 'Rita Doe' },
      { notary: 'Richard Doe' },
    ]);
  });
});
