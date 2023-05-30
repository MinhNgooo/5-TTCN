public class Account {

    protected String accountNo;
    protected String customerName;
    protected double balance;

    public Account() {
    }

    public Account(String accountNo, String customerName, double
            balance) {
        this.accountNo = accountNo;
        this.customerName = customerName;
        this.balance = balance;
    }

    public String getAccountNo() {
        return accountNo;
    }

    public void setAccountNo(String accountNo) {
        this.accountNo = accountNo;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}

public class PersonAccount extends Account {

    private double fee;

//constructor

    public PersonAccount(double fee, String accountNo, String
            customerName, double balance) {
        super(accountNo, customerName, balance);
        this.fee = fee;
    }

//phương thức rút tiền

    public void withDraw(double money) {
        if (money == 0) {
            System.out.println("Please enter money>0");
        } else if (balance - fee < money) {
            System.out.println("Balance in your account not enough
            for withdraw");
        } else {
            balance = balance - (money + fee);
            System.out.printf("Please recieve money is %8.2f. Your
                    balance is %8.2f\n", money, balance);
        }
    }

//phương thức gửi tiền
public void deposit(double money) {
    if (money == 0) {
        System.out.println("Please enter money>0");
    } else {
        balance = balance + money - fee;
        System.out.printf("You just deposit %8.2f. Your
                balance is %8.2f\n", money, balance);
    }
}

//ghi đè phương thức toString

    @Override
    public String toString() {
        return "------------Account information---------------
\nAccount No: " + accountNo + "\nCustomer Name: " + customerName +
        "\nBalance: " + balance + "\nFree: " + fee;
    }
}