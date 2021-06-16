//package newJavaProject;
//THIS CLASS DOES NOT NEED TO CHANGE.
/******************************
	
	COSC-1436
	El Centro College
	Professor Parker
	2019

	Class to define Stock ( as in ownership in a Corporation )
	
	*******************************/

public class Stock {
	
	private String stockSymbol = null;
	private int openingPrice = 0;
	private int currentPrice = 0;

	public Stock(String stockSymbol, int openingPrice, int currentPrice) {
		this.stockSymbol = stockSymbol;
		this.openingPrice = openingPrice;
		this.currentPrice = currentPrice;
	}

	public String getStockSymbol() {
		return stockSymbol;
	}

	public void setStockSymbol(String stockSymbol) {
		this.stockSymbol = stockSymbol;
	}

	public int getOpeningPrice() {
		return openingPrice;
	}

	public void setOpeningPrice(int openingPrice) {
		this.openingPrice = openingPrice;
	}

	public int getCurrentPrice() {
		return currentPrice;
	}

	public void setCurrentPrice(int currentPrice) {
		this.currentPrice = currentPrice;
	}

	@Override
	public String toString() {
		return "Stock [stockSymbol=" + stockSymbol + ", openingPrice=" + openingPrice + ", currentPrice="
				+ currentPrice + "]";
	}

} // END OF CLASS Stock
