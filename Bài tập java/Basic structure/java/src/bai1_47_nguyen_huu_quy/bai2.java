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
public class bai2 {
    static Scanner scanner =new Scanner(System.in);
    static public void main(String[] args){
        System.out.print("Nhap he so bac 2, a = ");
        float a = scanner.nextFloat();
        System.out.print("Nhap he so bac 1, b = ");
        float b = scanner.nextFloat();
        System.out.print("Nhap hang so tu do, c = ");
        float c = scanner.nextFloat();
        giaiPTBac2(a, b, c);
    }
    public static void giaiPTBac2(float a, float b, float c) {
        if (a== 0) {
            if (b == 0) {
                System.out.println("Phuong trinh vo nghiem");
            } else {
                System.out.println("Phuong trinh co 1 nghiem: " + "x = " + (-c / b));
            }
            return;
        }
        float delta = b*b - 4*a*c;
        float x1;
        float x2;
        if (delta > 0) {
            x1 = (float) ((-b + Math.sqrt(delta)) / (2*a));
            x2 = (float) ((-b - Math.sqrt(delta)) / (2*a));
            System.out.println("Phuong trinh co 2 nghiem la: " + "x1 = " + x1 + " và x2 = " + x2);
        } else if (delta == 0) {
            x1 = (-b / (2 * a));
            System.out.println("Phuong trinh co 1 nghiem kep: " + "x1 = x2 = " + x1);
        } else {
            System.out.println("Phuong trinh vo nghiem: ");
        }
    }
}
