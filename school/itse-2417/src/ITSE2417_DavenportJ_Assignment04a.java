/**
*	@author Joel Davenport
*	@hidden 
*	ID: 3320633
*	Due Date: April 4, 2021
*	Date Submitted: March 31, 2021
*	The purpose of this program is to display travel instructions.
*
*	Assignment: Drive a Car
*/

public class ITSE2417_DavenportJ_Assignment04a {

	/**
	 * display driving instructions
	 * @param destination > input should be an address
	 */
	public static void driveToDestination(String destination) {
		System.out.println(String.format("Drive to destination: %s.", destination));
	}
	/**
	 * displays safety check instructions
	 */
	public static void safetyCheck() {
		System.out.println("Strap seat belt, check mirriors.");
	}
	/**
	 * instructs user to unlock their car
	 */
	public static void unlockCar() {
		System.out.println("Unlock your car.");	
	}
	/**
	 * instructs user to start their car's engine
	 */
	public static void startEngine() {
		System.out.println("Start car's engine.");
	}
	/**
	 * instructs user to locate their car
	 */
	public static void findCar() {
		System.out.println("Find your car.");
	}
	/**
	 * instructs user to give an address to their GPS
	 */
	public static void addressToGPS() {
		System.out.println("Give address to GPS.");
	}

	
	/**
	 * Main
	 * Call functions in an order that displays competent driving instructions
	 * @param args none
	 */
	public static void main(String args[]) {
		
		findCar();
		unlockCar();
		safetyCheck();
		startEngine();
		addressToGPS();
		driveToDestination("123 ABC Lane"); //requires a String type argument
	}
}
