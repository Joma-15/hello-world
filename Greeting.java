import java.util.Scanner;
import java.util.PriorityQueue;;

public class Greeting {
    static Scanner scanner = new Scanner(System.in); 
    static PriorityQueue<String> nicknames = new PriorityQueue<>();

    public static void main(String[] args) {

        System.out.println("Enter the nicknames of 4 of your classmates: ");
        for (int i = 0; i < 4; i++) {
            nicknames.add(scanner.nextLine()); //will add the name of the classmate
        }
        System.out.println("\nPress H to say Hi to each of them H : ");
        sayHi();

    }
    static void sayHi(){
        while (!nicknames.isEmpty()) {
            boolean isValidRes = scanner.nextLine().equalsIgnoreCase("H");

            if (isValidRes) {
                System.out.println("Hi " + nicknames.poll());
            }else{
                System.out.println("invalid input try again!");
            }
        }
        System.out.println("Done saying Hi");
    }
}