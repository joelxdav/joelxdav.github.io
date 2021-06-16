import java.util.Scanner;

/**
*	@author Joel Davenport
*	@hidden 
*	ID: 3320633
*	Due Date: April 11, 2021
*	Date Submitted: April 6, 2021
*	The purpose of this program is to determine if a candidate qualifies for a FHA Mortgage.
*
*	Assignment: Mortgage Display
*/

public class ITSE2417_DavenportJ_Assignment05b {
	/**
	 * a scanner to allow for user input via keyboard
	 */
	static Scanner in = new Scanner(System.in);

	/**
	 * Main
	 * Takes input for primary residence and credit score
	 * and outputs user's eligibility for loan. 
	 * @param args none
	 */
	public static void main(String args[]) {
		
		byte is_primary_residence;
		boolean primary_residence;
		int credit_score; 
		
		// gathers info about primary residence as a byte
		System.out.println("Enter 1 if the home WILL be your primary residence, or enter 0 if it will NOT: ");
		is_primary_residence = in.nextByte();
		
		// create boolean for primary residence
		if (is_primary_residence == 1) { primary_residence = true; } else { primary_residence = false; }
		
		// gets users credit score as an int
		System.out.println("Enter the Credit Score: ");
		credit_score = in.nextInt();
		
		// "calculates" and displays their eligibility
		if (primary_residence && credit_score >= 580) {
			System.out.println("You qualify for the loan.");
		} else {
			System.out.println("You DO NOT qualify for the loan.");
		}
	}
}