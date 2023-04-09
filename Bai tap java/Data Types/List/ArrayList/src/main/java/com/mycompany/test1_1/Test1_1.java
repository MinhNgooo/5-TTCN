/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package com.mycompany.test1_1;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Scanner;

/**
 *
 * @author iq123
 */
public class Test1_1 {

    public static Scanner sc = new Scanner(System.in);

    public static void sapxep(ArrayList<SinhVien> sv){
        sv.sort(new Comparator<SinhVien>(){
            @Override
            public int compare(SinhVien a,SinhVien b){
                int cmp=a.getTen().compareToIgnoreCase(b.getTen());
                if(cmp==0)
                    return a.getLop().compareToIgnoreCase(b.getTen());
                return cmp;
            }
        });
    }

    public static void main(String[] args) {
        int n;
        ArrayList<SinhVien> sv = new ArrayList();
        do {
            System.out.println("nhap vao so luong sinh vien muon nhap lon hon 1: ");
            n = sc.nextInt();
            sc.nextLine();
        } while (n < 1);
        for (int i = 0; i < n;) {
            System.out.println("nhap vao sinh vien thu: " + (++i));
            SinhVien temp = new SinhVien();
            temp.nhap();
            sv.add(temp);
        }
        sapxep(sv);
        System.out.printf("%15s%15s%15s%15s%15s%20s%20s%20s\n", "ten", "tuoi", "gioitinh", "lop", "nganh", "ten truong", "dia chi truong", "hieu truong truong");
        for (SinhVien temp : sv) {
            temp.xuat();
        }
    }
}
