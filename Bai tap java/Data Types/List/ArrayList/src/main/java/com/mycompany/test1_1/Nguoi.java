/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.test1_1;

import java.util.Scanner;

/**
 *
 * @author iq123
 */
public class Nguoi {

    protected String ten;
    protected int tuoi;
    protected String gioitinh;
    public Scanner sc = new Scanner(System.in);

    public Nguoi() {
    }

    public Nguoi(String ten, int tuoi, String gioitinh) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.gioitinh = gioitinh;
    }

    public String getTen() {
        return ten;
    }

    public int getTuoi() {
        return tuoi;
    }

    public String getGioitinh() {
        return gioitinh;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public void setTuoi(int tuoi) {
        this.tuoi = tuoi;
    }

    public void setGioitinh(String gioitinh) {
        this.gioitinh = gioitinh;
    }

    @Override
    public String toString() {
        return "Nguoi{" + "ten=" + ten + ", tuoi=" + tuoi + ", gioitinh=" + gioitinh + '}';
    }

    public void nhap() {
        do {
            System.out.println("nhap vao ten (bat buoc): ");
            ten = sc.nextLine();
            System.out.println("nhap vao tuoi: ");
            tuoi = sc.nextInt();
            sc.nextLine();
            System.out.println("nhap vao gioi tinh: ");
            gioitinh = sc.nextLine();
        } while (ten == "");
    }
}
