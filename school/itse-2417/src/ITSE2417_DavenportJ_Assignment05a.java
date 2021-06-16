import java.util.Scanner;

/**
*	@author Joel Davenport
*	@hidden 
*	ID: 3320633
*	Due Date: April 11, 2021
*	Date Submitted: April 6, 2021
*	The purpose of this program is to display a letter grade based on a grade percentage.
*
*	Assignment: Grade Display
*/

public class ITSE2417_DavenportJ_Assignment05a {
	/**
	 * a scanner to allow for user input via keyboard
	 */
	static Scanner in = new Scanner(System.in);
	/**
	 * This method converts a percentage 
	 * from 1-100 into a letter grade
	 * @param percent accepts a data type of short
	 */
	static void convertGrade(short percent) {
		String output, grade;
		
		if (percent >= 90 && percent <= 100) {
			grade = "A";
		} 
		else if (percent >= 80 && percent <= 89) {
			grade = "B";
		} 
		else if (percent >= 70 && percent <= 79) {
			grade = "C";
		} 
		else if (percent >= 60 && percent <= 69) {
			grade = "D";
		} 
		else {
			grade = "F";
		}
		
		output = String.format("\nThe grade associated with a percentage of %s is %S", percent, grade);
		System.out.println(output);
	}
	/**
	 * This method checks to see if the data entered
	 * is between two numbers in a range. If not, it prompts for 
	 * new input then calls itself to validate the new input. 
	 * This method will allow n attempts before ending.
	 * @param percent accepts a data type of short.
	 * @param low accepts an int for the lowest value in the range.
	 * @param high accepts an int for the highest value in the range.
	 * @param stackSaver accepts an int for the number of times
	 * to run the range validation.
	 */
	static void rangeValidation(short percent, int low, int high, int stackSaver) {
		String attempts;
		
		// merely for readability
		switch (stackSaver) {
		case 1: 
			attempts = "1 attempt left";
			break;
		default:
			attempts = stackSaver + " attempts left";
			break;
		}
		
		// validation cycle
		if (percent >=1 && percent <= 100) {
			// input is acceptable
			convertGrade(percent);
		}
		else if (stackSaver > 0) {
			// input is NOT acceptable
			System.out.printf("Please enter a grade percentage between %s and %s. (%s)\n", low, high, attempts);
			percent = in.nextShort();
			rangeValidation(percent, low, high, stackSaver-1);
		}
		else {
			System.out.print("You have exceeded your attempts. The program will now end.");
			return;
		}
	}
	
	/**
	 * Main
	 * This prompts for input of a grade percentage 
	 * then passes it off to validate the range is 1-100 
	 * @param args none
	 */
	public static void main(String args[]) {
		
		short grade_percentage;
		int low = 1;
		int high = 100;
		int attempts = 5;
		
		System.out.printf("Please enter a grade percentage between %s and %s: ", low, high);
		
		grade_percentage = in.nextShort();
		
		rangeValidation(grade_percentage, low, high, attempts);
		
		in.close();
	}
}