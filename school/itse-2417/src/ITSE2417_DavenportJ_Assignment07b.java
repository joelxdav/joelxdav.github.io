import java.util.Scanner;

/**
 * 
 * @author Joel Davenport
 * @hidden
 * ID: 3320633
 * Due Date: April 18th, 2021
 * Date Submitted: April 13th, 2021
 * 
 * Assignment: For Loop
 * - This program is to calculate compound interest.
 */
public class ITSE2417_DavenportJ_Assignment07b {
	/**
	 * a Scanner object to accept user input.
	 */
	static Scanner in = new Scanner(System.in);
	/**
	 * This method calculates how many years it will take to double one's investment. 
	 * @param initial_balance a double to hold the user's starting investment balance. 
	 * @param new_balance a double to hold the updated balance after each iteration. 
	 * @param year_count an int to hold the current year. 
	 * @param INTEREST_RATE a final double to hold the percent of interest compounded. 
	 */
	static void yearsToDoubleInvestment(double initial_balance, double new_balance, int year_count, final double INTEREST_RATE) {
		
		// we will use a do-while loop so that we get at least one output of current values.
		do {
			year_count++;
			new_balance *= INTEREST_RATE;
			System.out.printf("\nYear %s = %.2f", year_count, new_balance);
		} while (new_balance < (initial_balance * 2));
			
		// output how many years it'll take to double the investment
		System.out.printf("\n\nYou will have doubled your investment after %s years!\n", year_count);
	}
	
	/**
	 * MAIN: 
	 * This method accepts investment information and displays 
	 * projections for what the balance would be after compound 
	 * interest is applied would be for however many years the 
	 * user enters.
	 * @param args none
	 */
	public static void main(String args[]) {
		
		double current_balance;
		double new_balance;
		final double INTEREST_RATE = 1.05;
		int year_count;
		boolean notified_once = false; // for extra credit
		
		
		System.out.print("Number of years to invest: ");
		year_count = in.nextInt();

		System.out.print("Amount to invest: ");
		current_balance = in.nextDouble();
		new_balance = current_balance;
		
		
		for (int i=0; i < year_count; i++) {
			
			new_balance *= INTEREST_RATE;
			System.out.printf(
					"\nYear %s balance = $%.2f",
					(i+1),
					new_balance
					);
			
			
			/* EXTRA CREDIT
			 * Notify the user if the initial investment has been doubled.
			 * Else at the end of the for loop display how many years it'll take to double.
			 */
			if (new_balance >= (current_balance * 2) && notified_once == false) { 
				System.out.print("\n\tCongratulations! You have doubled your investment.");
				notified_once = true;
			}
			else if (i == year_count-1 && new_balance < (current_balance * 2)) { 
				
				// let the user know why the projection continued
				System.out.println("\n\nNow let's see how long it'll take to double your investment.");
				
				// encapsulation and generalization
				yearsToDoubleInvestment(current_balance, new_balance, year_count, INTEREST_RATE);
			}
			// END EXTRA CREDIT
		}
	}
}