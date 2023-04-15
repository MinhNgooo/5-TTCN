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
public class bai11 {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int matran[][] = new int[3][3];
        for (int i = 0; i < matran.length; i++) {
            for (int j = 0; j < matran[i].length; j++) {
                System.out.println("[" + i + "],[" + j + "]=");
                matran[i][j] = scanner.nextInt();
            }
        }
        for (int[] matran1 : matran) {
            for (int j = 0; j < matran1.length; j++) {
                System.out.print(matran1[j] + " ");
            }
            System.out.println();
        }
        System.out.println("so nguyen to lon nhat la: " + sntmax(matran));
    }

    public static int sntmax(int matran[][]) {
        int max = matran[0][0];
        for (int[] matran1 : matran) {
            for (int j = 0; j < matran1.length; j++) {
                if (matran1[j] > max && Songuyento(matran1[j])) {
                    max = matran1[j];
                }
            }
        }
        return max;
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
