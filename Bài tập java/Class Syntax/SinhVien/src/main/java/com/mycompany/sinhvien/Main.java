/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.sinhvien;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

/**
 *
 * @author iq123
 */
public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<SinhVien> danhSachSinhVien = new ArrayList<>();

        System.out.print("Nhập số lượng sinh viên: ");
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            System.out.println("Nhập thông tin sinh viên thứ " + (i + 1) + ":");
            SinhVien sv = new SinhVien();
            sv.nhap();
            danhSachSinhVien.add(sv);
        }

        System.out.println("Danh sách sinh viên:");
        SinhVien.inTieuDe();
        for (SinhVien sv : danhSachSinhVien) {
            sv.inDuLieu();
        }

        Collections.sort(danhSachSinhVien, new Comparator<SinhVien>() {
            @Override
            public int compare(SinhVien sv1, SinhVien sv2) {
                int kq = sv1.getHoTen().compareTo(sv2.getHoTen());
                if (kq == 0) {
                    return Float.compare(sv2.getDiemLT(), sv1.getDiemLT());
                }
                return kq;
            }
        });
        System.out.println("Danh sách sinh viên đã sắp xếp theo tên:");
        SinhVien.inTieuDe();
        for (SinhVien sv : danhSachSinhVien) {
            sv.inDuLieu();
        }

        float diemTBMax = 0, diemTBMin = 10;
        SinhVien svDiemTBMax = null, svDiemTBMin = null;
        for (SinhVien sv : danhSachSinhVien) {
            float diemTB = sv.getDiemTB();
            if (diemTB > diemTBMax) {
                diemTBMax = diemTB;
                svDiemTBMax = sv;
            }
            if (diemTB < diemTBMin) {
                diemTBMin = diemTB;
                svDiemTBMin = sv;
            }
        }

        System.out.println("Sinh viên có điểm trung bình cao nhất:");
        svDiemTBMax.inDuLieu();
        System.out.println("Sinh viên có điểm trung bình thấp nhất:");
        svDiemTBMin.inDuLieu();

        sc.close();
    }
}
