/**
 * COSC 1436 - Programming Fundamentals I
 * El Centro College
 * Professor Keith Smelser
 * 
 * Final Project support file.
 * This file does not need to change to be included in the submission.
 * 
 */
import java.awt.Dimension;
import java.awt.Font;
import java.awt.GridLayout;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class GuiBoard  extends JFrame {
	
	private static final long serialVersionUID = 3599408058087421691L;
	private JButton[][] guiBoardButtons = new JButton[3][3]; 

	// Create the Buttons for the TicTacToe Board
	private JButton createButton()
	{
		JButton theButton = new JButton();
		theButton.setPreferredSize(new Dimension(50, 50));
		Font buttonFont = new Font("Dialog", Font.PLAIN, 72);
		theButton.setFont(buttonFont);
		return theButton;
	}
	
	/*
	 * Create the board
	 * Leave on the upper left corner of the screen
	 */
	
	public GuiBoard()
	{
		
		this.setSize(300,300);
	    this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	    this.setTitle("ITSE 2417 TicTacToe");
	    this.setAlwaysOnTop(true);
		JPanel panel1 = new JPanel();
	    panel1.setSize(300,300);
	    panel1.setLayout(new GridLayout(3,3));
	    for (int row = 0; row < 3; ++row) {
	    	for (int col = 0; col < 3; ++col) {
	    		JButton newButton = createButton();
	    		newButton.setText("");
	    		guiBoardButtons[row][col] = newButton;
	    		panel1.add(newButton);
	    	}
	    }

	    this.add(panel1);
	    this.setVisible(true);
	}
	
	/*
	 * Sets the Tic Tac Toe Square with the given value
	 * At Row-Column
	 */
	public boolean setSquare(int row,int col, char value) {
		boolean result = false;
		if (guiBoardButtons[row][col].getText().isEmpty()) {
			guiBoardButtons[row][col].setText(Character.toString(value));
			result = true;
		}
		return result;
	}
	
}