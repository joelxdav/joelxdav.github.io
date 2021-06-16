import java.util.Scanner;

/**
 * 
 * @author Joel Davenport
 * @hidden
 * ID: 3320633
 * Due Date: April 18th, 2021
 * Date Submitted: April 18th, 2021
 * 
 * Assignment: Do While Loop
 * - This program creates a menu.  
 */
public class ITSE2417_DavenportJ_Assignment07c {
	/**
	 *  object to accept keyboard input
	 */
	static Scanner in = new Scanner(System.in);
	
	
	/**
	 * MAIN: 
	 * This method displays a menu selection and 
	 * prompts the user to choice an item.
	 * @param arg none
	 */
	public static void main(String arg[]) {
		
		String menu_choice;
		
		do {
			System.out.println(
					"\n|------M E N U------|" +
					"\n| A. Deposit Cash   |" +
					"\n|-------------------|" + 
					"\n| B. Withdraw Cash  |" +
					"\n|-------------------|" + 
					"\n| X. Exit           |" +
					"\n|___________________|"
					);
			
			System.out.print("\nEnter your selection using one letter: ");
			menu_choice = in.nextLine().toUpperCase(); // EXTRA CREDIT 5 PTS
			
			
			if (menu_choice.equals("A")) {
				System.out.println("\n\tDeposit Cash");
			} 
			else if (menu_choice.equals("B")) {
				System.out.println("\n\tWithdraw Cash");
			} 
			else if (menu_choice.equals("X")) {
				System.out.println("\n\tExit");
				break;
			} 
			else {
				System.out.printf("\nInvalid selection. Your input: '%s'\n", menu_choice);
			}
			
		} while (true);
		
		in.close();
	}
}