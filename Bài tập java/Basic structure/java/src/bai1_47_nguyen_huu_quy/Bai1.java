
package bai1_47_nguyen_huu_quy;
import java.util.Scanner;

/**
 *
 * @author iq123
 */
public class Bai1 {
    
    
    public static void main(String[] args) {
        Scanner scanner =new Scanner(System.in);
        System.out.println("Nhap vao so do: ");
        int sonhap;
        sonhap = scanner.nextInt();
        System.out.println(sonhap);
        if(!Songuyento(sonhap)){
            System.out.println("day la so nguyen to");
        }
    }
    public static boolean Songuyento(int n) {
        if (n < 2) {
            return false;
        }
        int canbac = (int) Math.sqrt(n);
        for (int i = 2; i <= canbac; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
    
}
