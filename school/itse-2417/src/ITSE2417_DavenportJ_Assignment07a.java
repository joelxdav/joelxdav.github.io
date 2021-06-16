import java.util.Scanner;

/**
 * 
 * @author Joel Davenport
 * @hidden
 * ID: 3320633
 * Due Date: April 18th, 2021
 * Date Submitted: April 13th, 2021
 * 
 * Assignment: While Loop
 * - This assignment shows a savings account balance.
 */
public class ITSE2417_DavenportJ_Assignment07a {
	/**
	 * a Scanner object to accept keyboard input
	 */
	static Scanner in = new Scanner(System.in);
	
	/**
	 * MAIN
	 * This method takes input for 3 variables: 
	 * amount_to_save_each_month, number_of_months_to_save, number_of_months_to_save
	 * then displays a projection of one's savings.
	 * @param args none
	 */
	public static void main(String args[]) {
		
		int current_balance = 0;
		int amount_to_save_each_month;
		int number_of_months_to_save;
		int current_savings_month = 1;
		
		
		System.out.print("Enter amount to save each month: ");
		amount_to_save_each_month = in.nextInt();

		System.out.print("Enter the number of months to save: ");
		number_of_months_to_save = in.nextInt();
		
		
		while (current_savings_month <= number_of_months_to_save) {
			
			current_balance += amount_to_save_each_month;
			System.out.printf(
					"\nDuring month %s your savings balance will be $%s",
					current_savings_month, current_balance
					);
			
			current_savings_month++;
		}
	}
}