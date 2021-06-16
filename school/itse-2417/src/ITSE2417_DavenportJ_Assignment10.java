import java.util.Currency;
import java.util.Locale;

/**
 * 
 * @author Joel Davenport
 * @hidden
 * ID: 3320633
 * Due Date: 4/25/21
 * Submitted: 4/22/21
 * 
 * Assignment: The Locale Class
 * - This program displays locale-specific information.
 *
 */
public class ITSE2417_DavenportJ_Assignment10 {
	
	/** 
	 * This method outputs the country, language, and 
	 * currency for an Locale object.
	 * @param locale is an object of the Locale class.
	 */
	static void displayMyLocaleInfo(Locale locale) {
		Currency currency = Currency.getInstance(locale);
		
		System.out.printf( 
				"The country %s speaks %s and uses the currency %s.\n",
				locale.getDisplayCountry(),
				locale.getDisplayLanguage(),
				currency.getDisplayName()
				);
	}
	
	/**
	 * MAIN: 
	 * This method creates four Locale objects 
	 * then passes them to a method that outputs
	 * country, language, and currency for the object.
	 * @param args none
	 */
	public static void main(String[] args) {
		
		Locale usa = new Locale("en", "us");
		Locale gb  = new Locale("en", "gb");
		Locale mex = new Locale("es", "mx");
		Locale pan = new Locale("es", "pa");
		
		displayMyLocaleInfo(usa);
		displayMyLocaleInfo(gb);
		displayMyLocaleInfo(mex);
		displayMyLocaleInfo(pan);
		
	}
}