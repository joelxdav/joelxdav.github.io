import java.util.Scanner;

/**
 * 
 * @author Joel Davenport
 * @hidden
 * ID: 3320633
 * Due Date: April 11, 2021
 * Date Submitted: April 10th
 * {@summary The purpose of this is to assist in trip planning}
 * 
 * Assignment: Trip Planner
 */
public class ITSE2417_DavenportJ_Assignment06 {
	/**
	 * scanner object for accepting input from keyboard
	 */
	static Scanner in = new Scanner(System.in);
	/**
	 * 
	 * @param miles a double to hold the miles traveled
	 * @param mpg a double to hold the rate of fuel consumption
	 * @return a double for gallons of gas consumed
	 */
	public static double fuelConsumption(double miles, double mpg) {
		return miles / mpg;
	}
	/**
	 * 
	 * @param miles a double that holds miles traveled
	 * @param mph a double that hold travel speed
	 * @return a double for the travel time
	 */
	public static double timeToTravel(double miles, double mph) {
		return miles / mph;
	}
	
	/**
	 * MAIN
	 * This method takes input for miles, mph, and mpg
	 * then calls 2 methods (timeToTravel and fuelConsumption)
	 * and outputs travel time and fuel consumption
	 * @param args none
	 */
	public static void main(String args[]) {
		
		double miles_to_travel;
		double travel_speed_MPH;
		double travel_MPG;
		
		System.out.println("Enter miles to travel: ");
		miles_to_travel = in.nextDouble();
		
		System.out.println("Enter travel speed in MPH: ");
		travel_speed_MPH = in.nextDouble();
		
		System.out.println("Enter travel miles per gallon: ");
		travel_MPG = in.nextDouble();
		
		
		System.out.println(String.format(
				"The time it'll take to travel %.2f miles is %.2f hours. ",
				miles_to_travel,
				timeToTravel(miles_to_travel, travel_speed_MPH)
				));
		
		
		System.out.println(String.format(
				"The fuel it'll take to travel %.2f miles is %.2f gallons.", 
				miles_to_travel,
				fuelConsumption(miles_to_travel, travel_MPG)
				));
	}
}
