class Bank {
  constructor(...accounts){
    this._accounts = [...accounts];
  }

  getAccounts(){
    return this._accounts;
  }

  getAccount(number){
    return this._accounts.filter(el=>el.getNumber() == number);
  }

  addAccount(account){
    this._accounts = [...this._accounts,account];
  }

  addSavingsAccount(interest){
    let savingsAccount = new SavingsAccount(interest);
    this._accounts = [...this._accounts, savingsAccount];
  }

  addCheckingAccount(overDraftLimit){
    let checkingAccount = new CheckingAccount(overDraftLimit);
    this._accounts = [...this._accounts, checkingAccount];
  }

  closeAccount(number){
    this._accounts = this._accounts.filter(el=>el.getNumber()!= number)
  }

   accountReport(){
     return this._accounts.reduce((acc,el)=> acc+el.toString()+",   ","");
   }

   endOfMonth(){
     return this._accounts.reduce((acc,el)=> acc+el.endOfMonth()+", ","");
   }

}
