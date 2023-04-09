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
public class Truong {

    private String ten;
    private String diaChi;
    private String hieuTruong;
    public Scanner sc = new Scanner(System.in);

    public Truong() {
    }

    public Truong(String ten, String diaChi, String hieuTruong) {
        this.ten = ten;
        this.diaChi = diaChi;
        this.hieuTruong = hieuTruong;
    }

    public String getTen() {
        return ten;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public String getHieuTruong() {
        return hieuTruong;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public void setHieuTruong(String hieuTruong) {
        this.hieuTruong = hieuTruong;
    }

    @Override
    public String toString() {
        return "truong{" + "ten=" + ten + ", diaChi=" + diaChi + ", hieuTruong=" + hieuTruong + '}';
    }

    public void nhap() {
        System.out.println("nhap vao ten truong: ");
        ten = sc.nextLine();
        System.out.println("nhap vao dia chi: ");
        diaChi = sc.nextLine();
        System.out.println("nhap vao hieu truong: ");
        hieuTruong = sc.nextLine();
    }
}
