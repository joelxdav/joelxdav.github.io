import java.time.LocalDateTime;

/**
 * 
 * @author Joel Davenport
 * @hidden
 * ID: 3320633
 * Due Date: 5/2/21
 * Submitted: 4/27/21
 * 
 * Assignment: Constructors
 * - This class supports another file.
 *
 */
public class MovieTicket {
	

	public MovieTicket() {
		// ...does nothing
	}

	public MovieTicket(String movieTitle, LocalDateTime movieDateTime) {
		this.movieTitle = movieTitle;
		this.movieDateTime = movieDateTime;
	}

	public MovieTicket(String title, LocalDateTime dateTime, int seat) {
		this.movieTitle = title;
		this.movieDateTime = dateTime;
		this.seatNbr = seat;
	}
	
	


/////////////////////////////////////////////////////////////// IS VALID
	/**
	 * 
	 * @return
	 */
	public boolean isValid() {
		if (this.seatNbr != 0 && this.movieTitle != null) {
			return true;
		} 
		else { return false; }
	}


////////////////////////////////////////////////////////////// MOVIE TITLE
	private String movieTitle = null;
	/**
	 * 
	 * @return
	 */
	public String getMovieTitle() {
		return movieTitle;
	}
	/**
	 * 
	 * @param movieTitle
	 */
	public void setMovieTitle(String movieTitle) {
		this.movieTitle = movieTitle;
	}
	
	
/////////////////////////////////////////////////////////// LOCAL DATE TIME
	private LocalDateTime movieDateTime = null;
	/**
	 * 
	 * @return
	 */
	public LocalDateTime getMovieDateTime() {
		return movieDateTime;
	}
	/**
	 * 
	 * @param movieDateTime
	 */
	public void setMovieDateTime(LocalDateTime movieDateTime) {
		this.movieDateTime = movieDateTime;
	}
	
	
///////////////////////////////////////////////////////////// THEATER NAME 
	private String theaterName = "Cinerama";
	/**
	 * 
	 * @return
	 */
	public String getTheaterName() {
		return theaterName;
	}
	/**
	 * 
	 * @param theaterName
	 */
	public void setTheaterName(String theaterName) {
		this.theaterName = theaterName;
	}
	
	
///////////////////////////////////////////////////////////// SCREEN NUMBER 
	private int screenNbr = 1;
	/**
	 * 
	 * @return
	 */
	public int getScreenNbr() {
		return screenNbr;
	}
	/**
	 * 
	 * @param screenNbr
	 */
	public void setScreenNbr(int screenNbr) {
		this.screenNbr = screenNbr;
	}
	
	
///////////////////////////////////////////////////////////// SEAT NUMBER 
	private int seatNbr = 0;
	/**
	 * 
	 * @return
	 */
	public int getSeatNbr() {
		return seatNbr;
	}
	/**
	 * 
	 * @param seatNbr
	 */
	public void setSeatNbr(int seatNbr) {
		this.seatNbr = seatNbr;
	}

	
	
@Override
	/*
	 * (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	public String toString() {
		return String.format("MovieTicket [" +
				"movieTitle=%s, " +
				"movieDateTime=%s, " +
				"theaterName=%s, " +
				"screenNumber=%s, " +
				"seatNumber=%s" +
				"]",
				this.movieTitle,
				this.movieDateTime,
				this.theaterName,
				this.screenNbr,
				this.seatNbr
				);
	}
}
