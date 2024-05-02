//Title:Inheritance
//Author:Kalaiarasan.P
//Reviewed by:

class Account {
    int accountNumber;
    double balance;

    public Account(int accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited " + amount + " to account " + accountNumber);
    }

    public void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn " + amount + " from account " + accountNumber);
        } else {
            System.out.println("Insufficient funds");
        }
    }

    public void displayBalance() {
        System.out.println("Account " + accountNumber + " balance: " + balance);
    }
}

class SavingsAccount extends Account {
    double interestRate;

    public SavingsAccount(int accountNumber, double balance, double interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    public void addInterest() {
        double interest = balance * interestRate / 100;
        deposit(interest);
        System.out.println("Interest added: " + interest);
    }
}
class Inheritance{
    public static void main(String[] args) {
        SavingsAccount savingsAccount = new SavingsAccount(7468437, 1000.0, 2.5);
        savingsAccount.displayBalance(); 
        savingsAccount.deposit(500); 
        savingsAccount.displayBalance(); 
        savingsAccount.withdraw(200); 
        savingsAccount.displayBalance(); 
        savingsAccount.addInterest(); 
        savingsAccount.displayBalance();
}
}

