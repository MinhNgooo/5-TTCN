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
public class bai10 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Nhap vao day so: ");
        int dayso[] = new int[10];
        for (int i = 0; i < dayso.length; i++) {
            dayso[i] = scanner.nextInt();
        }
        sapxep(dayso);
        for (int i = 0; i < dayso.length; i++) {
            System.out.print(dayso[i] + ", ");
        }
    }

    public static void sapxep(int dayso[]) {
        for (int i = 0; i < dayso.length - 1; i++) {
            for (int j = i + 1; j < dayso.length; j++) {
                if (dayso[i] > dayso[j] && Songuyento(dayso[i]) && Songuyento(dayso[j])) {
                    //HoanVi(dayso[i], dayso[j]);
                    int temp=dayso[i];
                    dayso[i]=dayso[j];
                    dayso[j]=temp;
                }else if(!Songuyento(dayso[i]) && Songuyento(dayso[j])){
                    int temp=dayso[i];
                    dayso[i]=dayso[j];
                    dayso[j]=temp;
                }
            }
        }
    }

    public static void HoanVi(int x, int y) {
        int q = x;
        x = y;
        y = q;
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
