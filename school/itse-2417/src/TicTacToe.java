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

import java.util.Scanner;

public class TicTacToe {

	public static void main(String[] args) {
		Long securityCode = 2413_7586_1902_7463L;
		
		TicTacToeBoard ticTacToeBoard = new TicTacToeBoard(TicTacToeBoard.PLAYER_2,securityCode);
		Scanner in = new Scanner(System.in);
		
		final int SENTINAL = 7;
		int row; 
		int col;
		
		while (ticTacToeBoard.hasWinner() == false) {
			
			System.out.println("-----------------------------\n\n\tYour Turn ");
			System.out.print("Enter a row number (1-3): ");
			row = in.nextInt(); 
				if (row == SENTINAL) {break;}
			System.out.print("Enter a column number (1-3): ");
			col = in.nextInt(); 
				if (col == SENTINAL) {break;}
				
	
			if (ticTacToeBoard.setValue(row, col) == false) {
				System.out.println(" * Invalid Input. (Note: enter numbers within the range 1 - 3)");
				continue;
			}		
			if (ticTacToeBoard.hasWinner()) {
				System.out.printf("-----------------------------\n\n\tThe winner is %S! \n", ticTacToeBoard.theWinnerIs());
				break;
			}
			if (ticTacToeBoard.hasSquaresAvailable() == false) {
				System.out.println("-----------------------------\nCat Game! There are no more spaces available. ");
				break;
			}
			if (ticTacToeBoard.theComputersTurn() == false) {
				System.out.println("-----------------------------\nThe computer has forfeited. ");
				break;
			}
			if (ticTacToeBoard.hasWinner()) {
				System.out.printf("-----------------------------\n\n\tThe winner is %S! \n", ticTacToeBoard.theWinnerIs());
				break;
			}
		}

		System.out.println("\n\tGame Over");
		
		in.close();
		
	}
}