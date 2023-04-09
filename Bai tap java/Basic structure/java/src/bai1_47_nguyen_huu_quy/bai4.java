/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package bai1_47_nguyen_huu_quy;
import java.util.Scanner;
/**
 *
 * @author iq123
 */
public class bai4 {
    private static Scanner scanner = new Scanner(System.in);
    /**
     * main
     * 
     * @param args
     */
    public static void main(String[] args) {
        System.out.print("Nhap so nguyen duong a = ");
        int a = scanner.nextInt();
        System.out.print("Nhap so nguyen duong b = ");
        int b = scanner.nextInt();
        // tính USCLN của a và b
        System.out.println("USCLN cua " + a + " va " + b + " la: " + USCLN(a, b));
    }
    public static int USCLN(int a, int b) {
        if (b == 0) return a;
        return USCLN(b, a % b);
    }
}
