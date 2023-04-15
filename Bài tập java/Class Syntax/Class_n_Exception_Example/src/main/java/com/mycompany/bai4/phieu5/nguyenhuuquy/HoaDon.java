/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.bai4.phieu5.nguyenhuuquy;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

/**
 *
 * @author iq123
 */
public class HoaDon {

    private Scanner scanner = new Scanner(System.in);
    private String SoHD, NgayHD;
    private int SoMatHang;
    private List<Hang> list = new ArrayList<Hang>();
    private KhachHang kh = new KhachHang();
    private int tongtien = 0;

    public void nhap() {
        System.out.println("nhap vao so hoa don: ");
        SoHD = scanner.nextLine();
        System.out.println("nhap vao ngay xuat hoa don: ");
        NgayHD = scanner.nextLine();
        System.out.println("nhap vao khach hang: ");
        kh.nhap();
        System.out.println("so san pham muon nhap vao: ");
        SoMatHang = scanner.nextInt();
        scanner.nextLine();
        if (SoMatHang < 1) {
            System.out.println("so san pham muon nhap vao: ");
            SoMatHang = scanner.nextInt();
            scanner.nextLine();
        }
        System.out.println("nhap vao list: ");
        for (int i = 0; i < SoMatHang; i++) {
            Hang temp = new Hang();
            temp.nhap();
            list.add(temp);
        }
    }

    public void in() {
        System.out.printf("%-15s%20s\t%-10s%20s\n", "Ma hoa don: ",SoHD,"Ngay in: ",NgayHD);
        System.out.printf("%-15s%20s\t%-10s%20s\n", "Ten khach hang: ",kh.getHoTen(),"Dia chi: ",kh.getDiaChi());
        System.out.printf("%20s%20s%20s%20s\n", "Don Gia", "So Luong", "Thanh Tien", "Tong");
        for (Hang hang : list) {
            int tientemp = hang.getDonGia() * hang.getSoLuong();
            System.out.printf("%20s%20d%20d%20d\n", hang.getTenHang(), hang.getSoLuong(), hang.getDonGia(), tientemp);
            tongtien += tientemp;
        }
        System.out.printf("%80d", tongtien);
    }
}
