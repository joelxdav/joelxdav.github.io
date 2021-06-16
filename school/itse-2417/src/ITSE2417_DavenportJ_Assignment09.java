import java.util.Scanner;
import java.util.Calendar;
import java.util.Locale;

/**
 * 
 * @author Joel Davenport
 * @hidden
 * ID: 3320633
 * Due Date: April 25th 2021
 * Submitted: April 22nd 2021
 * 
 * Assignment: Message Builder
 * - This program will generate text for an email.
 *
 */
public class ITSE2417_DavenportJ_Assignment09 {
	
	// Scanner object to parse input
	static Scanner in = new Scanner(System.in);
	
	// returns a shipping date
	public static String shipDOW() {
		Calendar in3days = Calendar.getInstance(); 
		in3days.add(Calendar.DAY_OF_YEAR, 3); 
		return in3days.getDisplayName(Calendar.DAY_OF_WEEK, Calendar.LONG_FORMAT, Locale.getDefault()); 
		}
	
	// returns a reference number
	public static String referenceNumber() {
		return Long.toString(System.currentTimeMillis());
		}
	
	
	/**
	 * MAIN: 
	 * This method accepts input for order information and
	 * composes an email message with this structured info.
	 * @param args none
	 */
	public static void main(String[] args) {
		
		String contact_name;
		String item;
		String number_of_items;
		
		
		System.out.print("Please enter a contact name: ");
		contact_name = in.next();

		System.out.print("Please enter an item to order: ");
		item = in.next();

		System.out.print("Please enter number of items to order: ");
		number_of_items = in.next();
		
		
		String salutation = "Dear $CONTACT$, \n";
		String customer_info = "Your order for $COUNT$ $ITEM$ will be shipped $DOW$. \n";
		String order_number = "The reference number is $REF$\n";
		
		
		salutation = salutation.replace("$CONTACT$", contact_name);
		customer_info = customer_info.replace("$COUNT$", number_of_items);
		customer_info = customer_info.replace("$ITEM$", item);
		customer_info = customer_info.replace("$DOW$", shipDOW());
		order_number = order_number.replace("$REF$", referenceNumber());
		

		String email_message = salutation.concat(customer_info.concat(order_number));
		System.out.print(email_message);	
	}
}