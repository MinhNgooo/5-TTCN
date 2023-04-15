package lab02;
import java.util.Scanner;
/**
 * @author CHUNGLD
 */
public class ConvertTime {

    public static void main(String[] args) {
//Khai bao bien
        int inputseconds, hours, minutes, seconds;
//Khoi tao doi tuong nhap lieu
        Scanner s = new Scanner(System.in);
//Nhap vao tong so giay
        System.out.print("Enter integer number:");
        inputseconds = s.nextInt();
//Chuyen roi ra so gio, so phut, so giay
        hours = inputseconds / 3600;
        minutes = (inputseconds % 3600) / 60;
        seconds = inputseconds % 60;
//In ra ket qua theo dinh dang hh:mm:ss
        System.out.printf("%d seconds are same for ", inputseconds, hours, minutes, seconds);
    }
}
