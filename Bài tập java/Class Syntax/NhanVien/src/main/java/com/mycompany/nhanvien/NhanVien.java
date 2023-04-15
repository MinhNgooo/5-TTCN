/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Project/Maven2/JavaApp/src/main/java/${packagePath}/${mainClassName}.java to edit this template
 */

package com.mycompany.nhanvien;

/**
 *
 * @author iq123
 */
public class NhanVien {
    private String maNV;
    private int soSP;
    public NhanVien(){
        
    }
    public NhanVien(String maVN,int soSP){
        this.maNV=maNV;
        this.soSP=soSP;
    }

    public String getMaNV() {
        return maNV;
    }

    public int getSoSP() {
        return soSP;
    }

    public void setMaNV(String maNV) {
        this.maNV = maNV;
    }

    public void setSoSP(int soSP) {
        if (soSP>0)
          this.soSP = soSP;
        else 
            System.out.println("nhap sai so");
    }
    public boolean coVuotChuan(){
        return soSP>500;
    }   
    public String getTongKet(){
        if (coVuotChuan())
            return "Vuot";
        return "";
    }
    public int getLuong(){
        if(coVuotChuan())
            return soSP*20000*500+(soSP-500)*30000;
        return soSP*20000;
    }
    public String XuatTieuDe(){
        return "MaNhanVien\tSoSanPham\tLuong\tTongKet";
    }
    public String inDL(){
        return maNV+"\t"+soSP+"\t"+getLuong()+"\t"+getTongKet();
    }
    @Override
    public String toString(){
        return maNV+" "+soSP;
    }
}
