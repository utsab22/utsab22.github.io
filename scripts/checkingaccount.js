class CheckingAccount extends Account{

  constructor(number, overDraftLimit){
    super(number);
    this._overDraftLimit = overDraftLimit;
  }

  getOverDraftLimit(){
    return this._overDraftLimit;
  }

  setOverDraftLimit(overDraftLimit){
    this._overDraftLimit =overDraftLimit;
  }

  withdraw(amount){
    if (amount <= 0) {
      throw new RangeError("Withdraw amount has to be greater than zero");
    }
    if (amount > this._balance + this._overDraftLimit) {
      throw Error("Insufficient funds. overdraft exceded");
    }
    this._balance -= amount;
  }

  toString(){
    return "Checkings Account: " + this._number + ", balance: " + this._balance + ", overDraftLimit: " + this._overDraftLimit;
  }

  endOfMonth(){
    let message = "";
    if (this.getBalance() < 0) message += "Warning, low balance ";
    message += this.toString();
    return message;
  }

}
