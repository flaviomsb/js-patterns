const Action = Object.freeze({
  deposit: 'deposit',
  withdraw: 'withdraw',
});

class Account {
  constructor() {
    this.balance = 0;
  }

  process(cmd) {
    const action = Action[cmd.action];
    this[action](cmd);
  }

  deposit(cmd) {
    this.balance += cmd.amount;
    cmd.success = true;
  }

  withdraw(cmd) {
    cmd.success = this.balance >= cmd.amount;
    if (cmd.success) this.balance -= cmd.amount;
  }
}

export { Account as default, Action };
