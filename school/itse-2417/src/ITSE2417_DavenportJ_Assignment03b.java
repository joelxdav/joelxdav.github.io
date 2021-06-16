/**
*	Joel Davenport
*	ID: 3320633
*	Due Date: April 4, 2021
*	Date Submitted: March 30, 2021
*	The purpose of this program is to compute remaining student count.
*
*	Assignment: Compute Remaining Student Count
*/

public class ITSE2417_DavenportJ_Assignment03b {

	/**
	 * Main
	 * @param args none
	 * generate output after computing variable values
	 */
	public static void main(String args[]) {
		
		String student_name = "Joel";
		int total_enrolled_students = 66;
		int full_classrooms = total_enrolled_students / 20;
		int students_in_non_full_classroom = total_enrolled_students % 20;
		
		String output = String.format(
				"%s attends a school with %s enrolled student. " +
				"\nThere are %s full classrooms, each consisting of twenty students. " + 
				"\nHowever, there are %s students who do not make up a full classroom.",
				student_name, total_enrolled_students, full_classrooms, students_in_non_full_classroom
				);
		System.out.println(output);
	}
	
}
