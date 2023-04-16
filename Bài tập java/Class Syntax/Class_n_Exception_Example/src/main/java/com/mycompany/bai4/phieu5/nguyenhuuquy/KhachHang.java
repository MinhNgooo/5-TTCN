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
public class KhachHang {
    private Scanner scanner=new Scanner(System.in);
    private String HoTen,DiaChi;

    public String getHoTen() {
        return HoTen;
    }

    public String getDiaChi() {
        return DiaChi;
    }

    public void setHoTen(String HoTen) {
        this.HoTen = HoTen;
    }

    public void setDiaChi(String DiaChi) {
        this.DiaChi = DiaChi;
    }

    public KhachHang() {
    }

    public KhachHang(String HoTen, String DiaChi) {
        this.HoTen = HoTen;
        this.DiaChi = DiaChi;
    }

    @Override
    public String toString() {
        return "KhachHang{" + "HoTen=" + HoTen + ", DiaChi=" + DiaChi + '}';
    }
    public void nhap(){
        System.out.println("nhap vao ho ten: ");
        HoTen=scanner.nextLine();
        System.out.println("nhap vao dia chi: ");
        DiaChi=scanner.nextLine();
    }
}
