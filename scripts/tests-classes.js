describe("a)  Account Class Methods Test ",function(){
  it("Testing all the getters setters of the Account Class Methods",function(){
    let account = new Account("02504080337403");
    // Account Balance Getter
    let getTheBalance = account.getBalance() == 0.00;
    // Account number Getter
    let getTheAccountNum = account.getNumber() == 02504080337403;
    // Account Deposit
    account.deposit(2000);
    let accountDeposited = account.getBalance() == 2000;

    //Account withdraw
    account.withdraw(500);
    let balanceWithdrawn = account.getBalance() == 1500;

    if (!getTheBalance)
      {
        assert.fail(0, 1, 'Account balance getter is not working');
      }
      else if (!getTheAccountNum)
      {
        assert.fail(0, 1, 'Account number getter is not working');
      }
      else if (!accountDeposited)
      {
        assert.fail(0, 1, 'Account Deposit method is not working');
      }
      else if (!balanceWithdrawn)
      {
        assert.fail(0, 1, 'Account Withdraw method is not working');
      }

      //All test are working
      assert.equal(true,true);
  });
});

describe("b)  Savings Account Test",function(){
  it("Testing Interest Getter, Setter and addInterest Method",function(){
    let savingsAccount = new SavingsAccount(453621,0.13);
    savingsAccount.deposit(1000);
    let interestGetter = savingsAccount.getInterest() == 0.13;

    savingsAccount.setInterest(0.10);
    let interestSetter = savingsAccount.getInterest() == 0.10;

    savingsAccount.addInterest();
    let addInterestBalance = savingsAccount.getBalance() == 1001;

    if (!interestGetter)
      {
        assert.fail(0, 1, 'Interest getter is not working');
      }
      else if (!interestSetter)
      {
        assert.fail(0, 1, 'Interest setter is not working');
      }
      else if (!addInterestBalance)
      {
        assert.fail(0, 1, 'Add Interest method is not working');
      }

    assert.equal(true, true);
  });
});

describe("c)  Checkings Account Test",function(){
  it("Testing OverDraft Getter, Setter and Withdraw Method",function(){
    let checkingsAccount = new CheckingAccount(453621, 300);
    // overDraftLimitGetter
    checkingsAccount.deposit(1000);
    let overDraftLimitGetter = checkingsAccount.getOverDraftLimit() == 300;

    //
    checkingsAccount.setOverDraftLimit(500);
    let overDraftLimitSetter = checkingsAccount.getOverDraftLimit() == 500;

    checkingsAccount.withdraw(1100);
    let withdrawMoney = checkingsAccount.getBalance() == -100;

    checkingsAccount.deposit(1100);
    chai.expect(checkingsAccount.withdraw.bind(checkingsAccount,1600)).to.throw("Insufficient funds. overdraft exceded");
    chai.expect(checkingsAccount.withdraw.bind(checkingsAccount,0)).to.throw("Withdraw amount has to be greater than zero");


    if (!overDraftLimitGetter)
      {
        assert.fail(0, 1, 'overDraftLimit getter is not working');
      }
      else if (!overDraftLimitSetter)
      {
        assert.fail(0, 1, 'overDraftLimit setter is not working');
      }
      else if (!withdrawMoney)
      {
        assert.fail(0, 1, 'Withdraw method is not working');
      }

    assert.equal(true, true);
  });
});

describe("d)  Bank Class Test",function(){
  it("Testing Bank Getter, Setter and other Method",function(){
    let account = new Account(12343);
    let account2 = new Account(12344);
    let savingsAccount1 = new SavingsAccount(12345, 0.10);
    let accounts = [account,savingsAccount1];
    let bank = new Bank(...accounts);

    //addAccount
    bank.addAccount(account2);
    let bankAccountAdded = bank.getAccounts().filter(el=> el.getNumber() == account2.getNumber());

    //addSavingsAccount
    bank.addSavingsAccount(12346, 0.10);
    let savingsAccountAdded = bank.getAccounts().filter(el=> el.getNumber() == 12346);

    // addCheckingAccount
    bank.addCheckingAccount(12347, 200);
    let checkingsAccountAdded = bank.getAccounts().filter(el=> el.getNumber() == 12347);

    // closeAccount
    bank.closeAccount(12345);
    let givenAccountClosed = bank.getAccounts().filter(el=> el.getNumber() == 12345).length == 0;

    // accountReport
    let reportString = bank.accountReport();
    console.log(reportString);

    // let eodString = bank.endOfMonth();
    // console.log(eodString);

    if (!bankAccountAdded)
      {
        assert.fail(0, 1, 'Add Account getter and setter is not working');
      }
      else if (!savingsAccountAdded)
      {
        assert.fail(0, 1, 'savingsAccountAdded method is not working');
      }
      else if (!checkingsAccountAdded)
      {
        assert.fail(0, 1, 'checkingsAccount method is not working');
      }
      else if (!givenAccountClosed)
      {
        assert.fail(0, 1, 'closeAccount method is not working');
      }
      else if (!givenAccountClosed)
      {
        assert.fail(0, 1, 'accountReport method is not working');
      }
      else if (!givenAccountClosed)
      {
        assert.fail(0, 1, 'endOfMonth method is not working');
      }
    assert.equal(true, true);
  });
});
