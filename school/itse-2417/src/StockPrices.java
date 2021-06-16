/******************************

	Student Name: Joel Davenport
	Student ID: 3320633
	Semester: Spring 2021
	
	ITSE-2417
	El Centro College
	Professor Parker
	2021SP

	Topic:Arrays of Objects
	*******************************/

import java.util.concurrent.ThreadLocalRandom;

public class StockPrices {

	static final int MAX_STOCK_COUNT = 24;
	static final int MIN_STOCK_PRICE = 10;
	static final int MAX_STOCK_PRICE = 100;

	// Create the array of Stock Objects
	Stock[] myStocks = new Stock[MAX_STOCK_COUNT];

	/**
	 * This constructor will load the values of the stock array.
	 * Nothing to change here.
	 */

	public StockPrices() {
		char startChar = 'A';
		String tmpSymbol = null;
		int startPrice = 0;
		int priceRightNow = 0;

		for (int idx = 0; idx < MAX_STOCK_COUNT; ++idx) {
			// Generate stock symbol for testing
			tmpSymbol = "" + (char) (startChar + idx) + (char) (startChar + idx + 1) + (char) (startChar + idx + 2);
			// Generate random data for pricing
			startPrice = ThreadLocalRandom.current().nextInt(MIN_STOCK_PRICE, MAX_STOCK_PRICE + 1);
			priceRightNow = ThreadLocalRandom.current().nextInt(MIN_STOCK_PRICE, MAX_STOCK_PRICE + 1);
			myStocks[idx] = new Stock(tmpSymbol, startPrice, priceRightNow);
			System.out.println(myStocks[idx]);
		}
	}
	
	/**
	 * This method displays the highest stock price
	 */
	public void displayHighest() {
		int highest = 0;
		for (int i=0; i < myStocks.length; i++) {
			if (myStocks[i].getCurrentPrice() > highest) {
				highest = myStocks[i].getCurrentPrice();
			}
		}
		System.out.println("Highest Stock price = " + highest);
	}
	
	/**
	 * This method displays the lowest stock price 
	 */
	public void displayLowest() {
		int lowest = 999999;
		for (int i=0; i < myStocks.length; i++) {
			if (myStocks[i].getCurrentPrice() < lowest) {
				lowest = myStocks[i].getCurrentPrice();
			}
		}
		System.out.println("Lowest Stock price = " + lowest);
	}
	
	/**
	 * This method displays the greatest change in 
	 * stock beginning and current stock price 
	 */
	public void displayGreatestChangeInPrice() {
		String stockSym = "";
		int greatestDiff = 0;
		
		for (int i=0; i < myStocks.length; i++) {
			int diff = myStocks[i].getCurrentPrice() - myStocks[i].getOpeningPrice();
			if (diff < 0) { diff *= -1; }
			
			if (diff > greatestDiff) {
				greatestDiff = diff;
				stockSym = myStocks[i].getStockSymbol();
			}
		}
		System.out.println("The stock with the greatest change in price is " 
				+ stockSym + " at $" + greatestDiff + ".");
	}
}