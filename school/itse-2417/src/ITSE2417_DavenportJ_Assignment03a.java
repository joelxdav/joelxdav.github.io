/**
*	Joel Davenport
*	ID: 3320633
*	Due Date: April 4, 2021
*	Date Submitted: March 30, 2021
*	The purpose of this program is to predict an age in the year 2030.
*
*	Assignment: What age will you be in 2030?
*/

public class ITSE2417_DavenportJ_Assignment03a {

	/**
	 * Main
	 * @param args none
	 * generate an output string after some calculation
	 */
	public static void main(String args[]) {
		
		String name = "Joel";
		int YEAR_2030 = 2030;
		int CURRENT_YEAR = 2021;
		int current_age = 27;
		int age_in_2030 = current_age + (YEAR_2030 - CURRENT_YEAR);
		
		String output = String.format("%s will be age %s in the year %s", name,age_in_2030,YEAR_2030);
		
		System.out.println(output);
	}
	
}
