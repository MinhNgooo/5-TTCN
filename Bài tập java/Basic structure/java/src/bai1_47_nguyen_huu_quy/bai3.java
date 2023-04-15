/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package bai1_47_nguyen_huu_quy;

import java.util.Scanner;

public class bai3 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int answer = 1;
		for (int i = 1; i <= n; i++) {
			answer *= i;
		}
		System.out.print(answer);
	}
}
