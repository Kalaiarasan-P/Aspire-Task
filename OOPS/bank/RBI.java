package bank;

public class RBI implements Bank{
	public void deposit() {
		System.out.println("Deposited");
	}
	
	public void getRateOfInterest() {
		System.out.println("Rate of interest is 3%");
	}

	public static void main(String []args) {
		RBI rBI=new RBI();
		rBI.deposit();
		rBI.getRateOfInterest();
	}
	
}
