import Account, { Action } from './Account';
import Command from './Command';

describe('Command pattern', () => {
  test('deposit', () => {
    const account = new Account();

    const command = new Command(Action.deposit, 100);
    account.process(command);

    expect(account.balance).toEqual(100);
    expect(command.success).toEqual(true);
  });

  test('withdraw', () => {
    const account = new Account();
    const deposit = new Command(Action.deposit, 100);
    account.process(deposit);

    const withdraw = new Command(Action.withdraw, 50);
    account.process(withdraw);

    expect(account.balance).toEqual(50);
    expect(withdraw.success).toEqual(true);

    withdraw.amount = 150;
    account.process(withdraw);

    expect(account.balance).toEqual(50);
    expect(withdraw.success).toEqual(false);
  });
});
