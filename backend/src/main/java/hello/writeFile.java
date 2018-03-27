package hello;
import java.io.*;

public class writeFile {
    public static void main(String[] args) {
        try{
            PrintWriter writer = new PrintWriter("test.txt", "UTF-8");
            writer.println("rida1");
            writer.println("Rida2");
            writer.close();
        }
        catch(Exception e) {
            System.out.println(e);
        }
    }
}
