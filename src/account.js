'use strict'

const account = {
  balance: 0,
  totalDeposit: 0,
  totalWithdrawals: 0,

  deposit: function (depositAmount) {
    this.balance += depositAmount
    this.totalDeposit += depositAmount
    console.log(`Depositing: R${depositAmount}`)
  },
  withdraw: function (withdrawAmount) {
    this.balance -= withdrawAmount
    this.totalWithdrawals += withdrawAmount
    console.log(`Withdrawing: R${withdrawAmount}`)
  },
  getSummary: function () {
    return `This account has a balance of R${this.balance} There have been deposits totalling R${this.totalDeposit} and withdrawals totalling R${this.totalWithdrawals}.`
  }
}

account.deposit(100)

account.withdraw(50)

console.log(account.getSummary())
