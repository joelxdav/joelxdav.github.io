import java.time.LocalDateTime;

/**
 * 
 * @author Joel Davenport
 * @hidden
 * ID: 3320633
 * Due Date: 5/2/2021
 * Submitted: 4/27/21
 * 
 * Assignment: Constructors Pt. 2
 * - This program retrieves the movie ticket info from the MovieTicket class.
 *
 */
public class MyMovieTest {

	public static void main(String[] args) {
		
		MovieTicket t1 = new MovieTicket();
		MovieTicket t2 = new MovieTicket();
		MovieTicket t3 = new MovieTicket();
	
		LocalDateTime myTime = LocalDateTime.now();
		
		t2.setMovieTitle("Alita: Battle Angel");
		t2.setMovieDateTime(myTime);
		
		t3.setMovieTitle("Ex Machina");
		t3.setMovieDateTime(myTime);
		t3.setSeatNbr(43);
		
		System.out.printf("%s \n  IsValid: %s \n\n", t1.toString(), t1.isValid());
		System.out.printf("%s \n  IsValid: %s \n\n", t2.toString(), t2.isValid());
		System.out.printf("%s \n  IsValid: %s \n\n", t3.toString(), t3.isValid());
	}
}
