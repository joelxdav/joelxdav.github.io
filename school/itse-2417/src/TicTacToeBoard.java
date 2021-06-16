/**
 * Student Name: Joel Davenport
 * Student ID: 3320633
 * Semester: Spring/2021
 * Class: ITSE 2417
 * EL Centro College
 * Professor: Jonathan Parker
 * 
 * 
 */

/**
 * The TicTacToe board is a 2 dimensional array
 * This is very similar to an Excel Spreadsheet - using rows and columns
 * 
 *    col    012  
 *    row 0  xxx           (0,0) | (0,1) | (0,2)
 *    row 1  xxx           (1,0) | (1,1) | (1,2)
 *    row 2  xxx           (2,0) | (2,1) | (2,2)
 * 
 * The array is loaded with the Boolean Class.
 * Boolean allows for true and false and also null.
 * This program treats null as not loaded, true as X and false as O
 */

import java.util.concurrent.ThreadLocalRandom;

public class TicTacToeBoard {

	public static final byte MAX_ROWS = 3;
	public static final byte MAX_COLS = 3;

	public static final char NOT_PLAYED = ' ';
	public static final char PLAYER_1 = 'X';
	public static final char PLAYER_2 = 'O';
	private static final char NO_WINNER = '?';

	private final byte FIRST_CHAR_SECURITY_CODE = 2;
	private GuiBoard theGUIBoard;

	// This enum is used as an indicator to know to process
	// rows or columns
	private enum ROW_OR_COLUMN {
		ROW, COLUMN
	};

	private Character[][] ticTacToeBoard = new Character[MAX_ROWS][MAX_COLS];
	private char computerPlayer = NOT_PLAYED;

	/**
	 * Constructor - Set the computer player X/O + security code
	 */
	public TicTacToeBoard(char myComputerPlayer, Long secCode) {
		if (myComputerPlayer == PLAYER_1 || myComputerPlayer == PLAYER_2) {
			computerPlayer = myComputerPlayer;
		} else {
			exit("Invalid TicTacToe Player - must be " + PLAYER_1 + " or " + PLAYER_2);
		}
		validateSecurityCode(secCode);
		System.out.println("Computer Player is " + computerPlayer);
		theGUIBoard = new GuiBoard();
	}

	/**
	 * Show a message and force the program to exit
	 */

	private void exit(String msg) {
		System.err.println(msg);
		System.err.println("Program will exit now.");
		System.exit(1);
	}

	/**
	 * Confirm that the security code passes validation If not - terminate program
	 * via the exit method
	 * 
	 * No need to change this method
	 */

	private void validateSecurityCode(Long secCode) {
		final int MAX_SIZE = 16;
		int diff = 0;
		int digit1 = 0;
		int digit2 = 0;
		int digitArray[] = new int[10]; // 0-9

		if (secCode == null) {
			exit("Security Code must not be null.");
		}
		String secCodeString = secCode.toString();
		if (secCodeString.length() != MAX_SIZE) {
			exit("Security Code is not 16 digits.");
		}
		if (Character.getNumericValue(secCodeString.charAt(0)) != FIRST_CHAR_SECURITY_CODE) {
			exit("Security Code must start with the digit '" + FIRST_CHAR_SECURITY_CODE + "'.");

		}
		for (byte idx = 1; idx < MAX_SIZE; ++idx) {
			if (secCodeString.charAt(idx) == secCodeString.charAt(idx - 1)) {
				exit("Sequential " + secCodeString.charAt(idx) + " found in the Security Code.");
			}
		}
		// initialize the digit array to 0 for each element
		// The index correlates with the digit used

		for (byte idx = 0; idx < digitArray.length; ++idx) {
			digitArray[idx] = 0;
		}
		// We know the security code starts at 2 so preload slot 2 with a 1 count
		digitArray[FIRST_CHAR_SECURITY_CODE] = 1;

		for (byte idx = 1; idx < MAX_SIZE; ++idx) { // yes - Start at 1
			digit1 = Character.getNumericValue(secCodeString.charAt(idx - 1));
			digit2 = Character.getNumericValue(secCodeString.charAt(idx));

			// System.out.println(digit1+":"+digit2);

			diff = digit1 - digit2;
			if (diff >= -1 && diff <= 1) {
				exit("Security Code has sequential numbers (" + digit1 + "" + digit2 + ")");
			}
			digitArray[digit2] = digitArray[digit2] + 1;
		}
		for (byte idx = 0; idx < digitArray.length; ++idx) {
			if (digitArray[idx] == 0) {
				exit("Digit " + idx + " does not exist in the Security Code.");
			}
		}

	}

	/**
	 * Check for a Rows or Columns for all same valid values If found - set the
	 * theWinnerIs value
	 */
	private Character checkRowOrColumnForWinner(ROW_OR_COLUMN rowOrColumn) {

		Character locatedWinner = null;

		// Since MAX_ROWS and MAX_COLS is 3 - will set MAX to 3 for all situations
		final int MAX = MAX_ROWS;
		for (byte idxDirection_1 = 0; idxDirection_1 < MAX; ++idxDirection_1) {
			if (locatedWinner != null) {
				// owner was set - No need to work on other rows or columns
				break;
			}

			for (byte idxDirection_2 = 0; idxDirection_2 < MAX; ++idxDirection_2) {
				Character entry = null;
				if (rowOrColumn.equals(ROW_OR_COLUMN.ROW)) {
					entry = ticTacToeBoard[idxDirection_1][idxDirection_2];
				} else { // must be column
					entry = ticTacToeBoard[idxDirection_2][idxDirection_1];
				}

				if (entry == null) { // Unused location - No Winner here
					locatedWinner = null; // reset back to Null for next row/col
					break;
				}
				if (locatedWinner == null) {
					locatedWinner = entry;
				} else if (!locatedWinner.equals(entry)) {
					// Multiple entries in Row or Column - No Winner here
					locatedWinner = null; // reset back to Null
					break;
				}
			}
		}
		return locatedWinner;
	}

	/**
	 * Report true if a winner is found
	 * or false if no winner detected
	 */
	public boolean hasWinner() {
		return (theWinnerIs() != NO_WINNER);
	}

	/**
	 * Returns X or O or ? if no winner found
	 */
	public char theWinnerIs() {

		Character theWinner = checkRowOrColumnForWinner(ROW_OR_COLUMN.ROW);
		if (theWinner == null) { // If not Row Winner - try Column Winner
			theWinner = checkRowOrColumnForWinner(ROW_OR_COLUMN.COLUMN);
		}
		if (theWinner == null) { // If not Column Winner - try Diagonal Winner
			theWinner = checkForDiagonalWin();
		}
		
		
		// Final result
		if (theWinner == null) {
			theWinner = NO_WINNER;
		}
		return theWinner;
	}

	/**
	 * Return true if no items have been played. Return false if game has started
	 */

	private boolean checkFirstPlay() {

		for (byte idxRow = 0; idxRow < MAX_ROWS; ++idxRow) {
			for (byte idxCol = 0; idxCol < MAX_COLS; ++idxCol) {
				if (ticTacToeBoard[idxRow][idxCol] != null) {
					return false;
				}
			}
		}
		return true;
	}

	/**
	 * Return true if squares are available. Return false if no more spaces available
	 */

	public boolean hasSquaresAvailable() {

		for (byte idxRow = 0; idxRow < MAX_ROWS; ++idxRow) {
			for (byte idxCol = 0; idxCol < MAX_COLS; ++idxCol) {
				if (ticTacToeBoard[idxRow][idxCol] == null) {
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * Checks for a diagonal win. This method is not used.
	 */
	private Character checkForDiagonalWin() {

		Character locatedWinner = null;
		
		if ((ticTacToeBoard[0][0] != null) && 
			(ticTacToeBoard[0][0] == ticTacToeBoard[1][1]) && 
			(ticTacToeBoard[0][0] == ticTacToeBoard[2][2])
		) {
			
			locatedWinner = ticTacToeBoard[0][0];	
		}
		if ((ticTacToeBoard[0][2] != null) && 
			(ticTacToeBoard[0][2] == ticTacToeBoard[1][1]) && 
			(ticTacToeBoard[0][2] == ticTacToeBoard[2][0])
		) {
			
			locatedWinner = ticTacToeBoard[0][2];	
		}		
				
		
		return locatedWinner;
	}

	/**
	 * Set the entry value only if it has the default null value.
	 */

	private boolean setValue(int row, int column, char player) {
		if (player == PLAYER_2) {
			if (checkFirstPlay()) {
				System.err.println(PLAYER_1 + " must start the game");
				return false;
			}
		}
		if (ticTacToeBoard[row][column] == null) {
			ticTacToeBoard[row][column] = player;
			theGUIBoard.setSquare(row, column, player);
			return true;
		}
		return false;
	}

	/**
	 * Public setValue method for the human player (Overloaded)
	 */

	public boolean setValue(int row, int column) {
		char thePlayer = PLAYER_1;
		if (computerPlayer == PLAYER_1) {
			thePlayer = PLAYER_2;
		}
		
		if (row < 1 || row > 3 || column < 1 || column > 3) {
			return false;
		}

		row--;
		column--;
		
		return setValue(row, column, thePlayer);
	}

	/**
	 * Private setValue for the Computer player
	 */

	private boolean setValueComputer(int row, int column) {
		return setValue(row, column, computerPlayer);
	}

	/**
	 * The computer will play now.
	 * It will set X or O at an empty location.
	 * Based on Random results - not intelligent
	 * 
	 */
	public boolean theComputersTurn() {
		final int MIN_RANGE = 0;
		final int MAX_RANGE = 8;
		final int RETRY_LIMIT = 15;
		short count = 0;
		int boxNumber = 0;
		int row = 0;
		int col = 0;
		do {
			++count;

			// Get a Random Number - 0-8 (9 values)
			boxNumber = ThreadLocalRandom.current().nextInt(MIN_RANGE, MAX_RANGE + 1);

			// determine the row and column
			row = boxNumber / MAX_ROWS;
			col = boxNumber % MAX_COLS;
			if (setValueComputer(row, col)) {
				System.out.println(" * Computer played at row " + row + " column " + col);
				return true; // found and loaded
			}
		} while (count < RETRY_LIMIT);

		return false; // Exiting - Could not find an open spot by random process
	}

}