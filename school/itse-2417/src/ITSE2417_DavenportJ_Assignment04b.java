import java.text.DecimalFormat;
import java.util.Scanner;

/**
*	@author Joel Davenport
*	@hidden 
*	ID: 3320633
*	Due Date: April 4, 2021
*	Date Submitted: March 31, 2021
*	The purpose of this program is to display an auto purchase plan.
*
*	Assignment: Buy a Car
*/

public class ITSE2417_DavenportJ_Assignment04b {
	/**
	 * a scanner to allow for user input via keyboard
	 */
	static Scanner keyboard = new Scanner(System.in);	
	/**
	 * a decimal formatter to round two places
	 */
	static DecimalFormat twoDecimals = new DecimalFormat("0.00");
	// how to implement >> twoDecimals.format(total_cost)
	
    
	/**
	 * calculates the total costs of an auto purchase
	 * displays a message with the details
	 * @param model a String type to hold the name of a car model
	 * @param payment a double type to hold the monthly payments
	 * @param months an int type to hold number of months to finance
	 */
	public static void calculateTotalCosts(String model, double payment, int months) {
		
		double total;
		total = payment * months;
		
		
		String output = String.format(
				"I am looking for a %s car that I can pay %.2f per month " + 
				"for %s months. My total cost would be %.2f.", 
				model, payment, months, total
				);
		
		System.out.println(output);
	}
	
	
	/**
	 * Main
	 * gathers input from user about car to buy
	 * calls a method to display cost details
	 * @param args none
	 */
	public static void main(String args[]) {
		
		String car_model;
		double expectedMonthlyPayment;
		int monthsToPay;
		
		System.out.println("Enter a car model: ");
		car_model = keyboard.nextLine();
		
		System.out.println("What is your expected monthly payment: ");
		expectedMonthlyPayment = keyboard.nextDouble();
		
		System.out.println("How many months do you expect to pay: ");
		monthsToPay = keyboard.nextInt();
		
		calculateTotalCosts(car_model,expectedMonthlyPayment,monthsToPay);
		
		keyboard.close();
	}
}
