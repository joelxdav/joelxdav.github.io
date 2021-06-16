import java.util.Scanner;

/**
 * 
 * @author Joel Davenport
 * @hidden
 * ID: 3320633
 * Due Date: 4/18/21
 * Date Submitted: 4/15/21
 * 
 * Assignment: Day Of Week
 * - This program displays the day of the week using an array.
 */
public class ITSE2417_DavenportJ_Assignment08 {
	/** 
	 * a Scanner object to accept keyboard input
	 */
	static Scanner in = new Scanner(System.in);
	
	/** 
	 * MAIN: 
	 * This method accepts input of 1 thru 7 
	 * and returns the corresponding day of the week. 
	 * It notifies the user if their entry is invalid, 
	 * and it prompts the user to try again to check a new day.
	 * @param args
	 */
	public static void main(String args[]) {
		
		String[] DAYS_OF_WEEK = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}; 
		String try_again = "y";
		int day;
		
		
		while (try_again.equalsIgnoreCase("Y")) {

			System.out.print("Enter the day of the week as a number 1 thru 7: ");
			day = in.nextInt();
			
			if (day >=1 && day <= 7) {
				System.out.printf(
						"The day of the week is %s.",
						DAYS_OF_WEEK[day-1]
						);
			} else {
				System.out.println("Invalid entry.");
				continue;
			}
				
			System.out.print("\nTry again? (Y/N): ");
			try_again = in.next();
		}
	}
}
