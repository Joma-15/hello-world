//seat reservation in java
//the user should have the option to choose a seat between seat one and the number 
//the row and column should be 10x10
//the user should also have an option to cancel the seat 
//the table should be display everytime the user make a changes 
//it should have class for managing the seats and the main class for the main page 
import java.util.InputMismatchException;
import java.util.Scanner;

class Seats{
    static String[][] flightSeat = new String[10][10]; //four row 10 column 
    Scanner scanner = new Scanner(System.in);

    //the current value of the seat is 0
    void currentSeat(){
        for (int i = 0; i < flightSeat.length; i++) {
            for (int j = 0; j < flightSeat[i].length; j++) {
                flightSeat[i][j] = "0"; 
            }
        }
    }

    void displaySeat(){
        System.out.println("\nCurrent Seat Available");

        for (int i = 0; i < flightSeat.length; i++) {
            System.out.printf("|   Seat%-3d |", i+1);
        }

        for (int i = 0; i < flightSeat.length; i++) {
            System.out.println();
            for (int j = 0; j < flightSeat[i].length; j++) {
                System.out.printf("|     %-3s   |", flightSeat[i][j]);
            }
        }
    }

    // // this is for displaying the current seat available 
    // static void displaySeat(){
    //     System.out.println("\nCurrent Seat Available");
    //     // traverse to each row 
    //     for (int i = 0; i < flightSeat.length; i++) {
    //         System.out.print("| " + "Seat" + (i+1) + " |");
    //         if ((i+1)==9) {break;}//ginawa ko to kasi hindi ko mapantay yung 10
    //     }
    //     System.out.print("| " + "Seat" + 10 + "|");//napantay ko na binawasan ko ng space

    //     //traversing to each column
    //     for (int i = 0; i < flightSeat.length; i++) {
    //         System.out.println();
    //         for (int j = 0; j < flightSeat[i].length; j++) {
    //             System.out.print("|   " + flightSeat[i][j] + "   |");
    //         }    
    //     }
    // }

//     void displaySeat(){
//         System.out.println("Current Seat available");
//         String currentSeat = "| " + "Seat" + " |";

//         //traverse to each row 
//         for (int i = 0; i < flightSeat.length; i++) {
//             currentSeat = currentSeat.substring(0,6).concat(Integer.toString(i+1) + currentSeat.substring(currentSeat.length()-1));
//     }
// }

// Display the current seats available in a clean table format
// static void displaySeat() {
//     System.out.println("Current Seat Available");

//     // Print seat header row with alignment
//     for (int i = 0; i < flightSeat[0].length; i++) {
//         System.out.printf("| Seat%-3d |", i + 1);  // %-3d for better alignment
//     }
//     System.out.println();  // Move to the next line after header

//     // Traverse and print each row with formatted columns
//     for (int i = 0; i < flightSeat.length; i++) {
//         for (int j = 0; j < flightSeat[i].length; j++) {
//             System.out.printf("|   %-3s   |", flightSeat[i][j]);  // %-3s aligns seat content
//         }
//         System.out.println();  // Move to the next row
//     }
// }
}

public class datastuct {
    static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args) {
        Seats s = new Seats();
        s.currentSeat();//this will set all the vacant seat available to 0
      while(true){
        System.out.println("-----Main Flight-------");
        System.out.println("1.Reserve seat\n2.Cancel Flight\n3.Sea list of available flight");
        System.out.print("Choose: ");
        try {
            int choose = scanner.nextInt();
            scanner.nextLine();

            if (choose==1)s.displaySeat();break;

        } catch (InputMismatchException e) {
            scanner.nextLine();
            System.out.println("Invalid input try again!\n");
        }
      }
    }
}

