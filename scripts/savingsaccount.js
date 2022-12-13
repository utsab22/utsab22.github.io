class SavingsAccount extends Account{

  constructor(acNumber, interest){
    super(acNumber);
    this._interest = interest;
  }

  getInterest(){
    return this._interest;
  }
  setInterest(interest){
    this._interest = interest;
  }

  addInterest(){
    let interestAmount = (this.getBalance() * this._interest) / 100;
    this.deposit(interestAmount);
    return interestAmount;
  }

  toString(){
    return "Savings Account: " + this._number + ", balance: " + this._balance + ", interest: " + this._interest;
  }
  
  endOfMonth(){
    let intrestAdded = this.addInterest();
    return "Interest added"+ this.toString() + " with interest amount : " + intrestAdded;
  }

}
