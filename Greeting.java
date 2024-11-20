import java.util.ArrayList;//heap can be represented using arraylist in java
import java.util.Collections;

public class Greeting {

    public static void main(String[] args) {
        ArrayList<Integer> heap = new ArrayList<>(); 
        
        //adding some element in the heap 
        Collections.addAll(heap, 1,2,3,4,5); 
        //determinign where is the root node 
        for (Integer e : heap) {
            System.out.println(e);
        }
    }
}