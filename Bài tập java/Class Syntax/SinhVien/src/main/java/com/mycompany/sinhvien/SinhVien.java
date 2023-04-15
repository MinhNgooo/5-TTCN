/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */
package com.mycompany.sinhvien;

/**
 *
 * @author iq123
 */
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

class SinhVien {

    private int maSv;
    private String hoTen;
    private float diemLT;
    private float diemTH;
    private float diemTB;

    public SinhVien() {
        this.maSv = 0;
        this.hoTen = "";
        this.diemLT = 0;
        this.diemTH = 0;
        this.diemTB = 0;
    }

    public SinhVien(int maSv, String hoTen, float diemLT, float diemTH) {
        this.maSv = maSv;
        this.hoTen = hoTen;
        this.diemLT = diemLT;
        this.diemTH = diemTH;
        this.diemTB = (diemLT + diemTH) / 2;
    }

    public int getMaSv() {
        return maSv;
    }

    public void setMaSv(int maSv) {
        this.maSv = maSv;
    }

    public String getHoTen() {
        return hoTen;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }

    public float getDiemLT() {
        return diemLT;
    }

    public void setDiemLT(float diemLT) {
        this.diemLT = diemLT;
    }

    public float getDiemTH() {
        return diemTH;
    }

    public void setDiemTH(float diemTH) {
        this.diemTH = diemTH;
    }

    public float getDiemTB() {
        return diemTB;
    }

    public static void inTieuDe() {
        System.out.printf("%-15s %-20s %-15s %-15s %-15s\n", "Ma SV", "Ho Ten", "Diem LT", "Diem TH", "Diem TB");
    }

    public void inDuLieu() {
        System.out.printf("%-15d %-20s %-15.1f %-15.1f %-15.1f\n", maSv, hoTen, diemLT, diemTH, diemTB);
    }

    public void nhap() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Nhap ma sinh vien: ");
        this.maSv = scanner.nextInt();

        System.out.print("Nhap ho ten sinh vien: ");
        this.hoTen = scanner.nextLine();

        System.out.print("Nhap diem ly thuyet: ");
        this.diemLT = scanner.nextFloat();

        System.out.print("Nhap diem thuc hanh: ");
        this.diemTH = scanner.nextFloat();

        // tính điểm trung bình
        this.diemTB = (this.diemLT + this.diemTH) / 2;
    }
}
