import java.util.Scanner;
import java.util.HashMap;
import java.util.Map;

public class StudentList {
    static Map<String, String> students = new HashMap<>();
    static Scanner scanner = new Scanner(System.in);
    static String lastKey = ""; //to store the last key

    public static void main(String[] args) {

        for (int i = 0; i < 3; i++) {
            System.out.print("Enter your student number : ");
            String studNumber = scanner.nextLine();
            System.out.print("Enter your first name : ");
            String firstName = scanner.nextLine();

            students.put(studNumber, firstName);
            lastKey = studNumber;// will be used to remove the last element 
        }
        DisplayVal(students);
        changeData();//overriding the value of the prev entries
        DisplayVal(students);

    }
    static void DisplayVal(Map<String, String>  n){
        System.out.println("\nStudent List");
        for(Map.Entry<String, String> e : students.entrySet()){
            System.out.printf("%s %s\n", e.getKey(), e.getValue());
        }
    }
    static void changeData(){
        System.out.print("Enter your student number : ");
        String studNum = scanner.nextLine();
        System.out.print("Enter your firstname : ");
        String firstName = scanner.nextLine();

        students.remove(lastKey);//remove the last prev elment
        students.put(studNum, firstName);//add the new element
    }
}

