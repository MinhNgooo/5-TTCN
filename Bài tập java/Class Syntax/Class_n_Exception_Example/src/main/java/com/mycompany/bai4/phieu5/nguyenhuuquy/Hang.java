/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.bai4.phieu5.nguyenhuuquy;

import java.util.Scanner;

/**
 *
 * @author iq123
 */
public class Hang {
    public Scanner scanner=new Scanner(System.in);
    private String TenHang;
    private int SoLuong,DonGia;

    public String getTenHang() {
        return TenHang;
    }

    public int getSoLuong() {
        return SoLuong;
    }

    public int getDonGia() {
        return DonGia;
    }

    public void setTenHang(String TenHang) {
        this.TenHang = TenHang;
    }

    public void setSoLuong(int SoLuong) {
        this.SoLuong = SoLuong;
    }

    public void setDonGia(int DonGia) {
        this.DonGia = DonGia;
    }

    public Hang() {
    }

    public Hang(String TenHang, int SoLuong, int DonGia) {
        this.TenHang = TenHang;
        this.SoLuong = SoLuong;
        this.DonGia = DonGia;
    }
    public void nhap(){
        System.out.println("nhap vao ten hang: ");
        TenHang=scanner.nextLine();
        System.out.println("nhap vao so luong: ");
        SoLuong=scanner.nextInt();
        System.out.println("nhap vao don gia: ");
        DonGia=scanner.nextInt();
    }
    @Override
    public String toString() {
        return "Hang{" + "TenHang=" + TenHang + ", SoLuong=" + SoLuong + ", DonGia=" + DonGia + '}';
    }
    
}
