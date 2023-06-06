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
public class SinhVien extends Nguoi {

    private String lop;
    private String nganh;
    private Truong truong;
    public Scanner sc = new Scanner(System.in);

    public SinhVien(String lop, String nganh, Truong truong) {
        this.lop = lop;
        this.nganh = nganh;
        this.truong = truong;
    }

    public SinhVien(String lop, String nganh, Truong truong, String ten, int tuoi, String gioitinh) {
        super(ten, tuoi, gioitinh);
        this.lop = lop;
        this.nganh = nganh;
        this.truong = truong;
    }

    public SinhVien() {
    }

    public void setLop(String lop) {
        this.lop = lop;
    }

    public void setNganh(String nganh) {
        this.nganh = nganh;
    }

    public void setTruong(Truong truong) {
        this.truong = truong;
    }

    public String getLop() {
        return lop;
    }

    public String getNganh() {
        return nganh;
    }

    public Truong getTruong() {
        return truong;
    }

    @Override
    public String toString() {
        return "SinhVien{" + "lop=" + lop + ", nganh=" + nganh + ", truong=" + truong + '}';
    }

    @Override
    public void nhap() {
        super.nhap();
        System.out.println("nhap vao lop: ");
        lop = sc.nextLine();
        System.out.println("nhap vao nganh: ");
        nganh = sc.nextLine();
        System.out.println("nhap vao truong: ");
        Truong temp = new Truong();
        temp.nhap();
        truong = temp;
    }

    public void xuat() {
        System.out.printf("%15s%15d%15s%15s%15s%20s%20s%20s\n", getTen(), getTuoi(), getGioitinh(), lop, nganh, truong.getTen(), truong.getDiaChi(), truong.getHieuTruong());
    }
}
