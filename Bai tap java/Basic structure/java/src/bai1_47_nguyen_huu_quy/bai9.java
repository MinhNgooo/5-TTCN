/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package bai1_47_nguyen_huu_quy;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
/**
 *
 * @author iq123
 */
public class bai9 {
    public static void main(String[] args) {
        int[] arr = {2, 3, 4, 5, 6}; // Mảng ban đầu
        int targetSum = 8; // Tổng giá trị cần tìm
        List<int[]> result = findArrays(arr, targetSum);
        if (result.size() == 0) {
            System.out.println("khong thay mang nao thoa mang theo yeu cau");
        } else {
            System.out.println("cac mang co gia tri bang " + targetSum + ":");
            for (int[] a : result) {
                System.out.println(Arrays.toString(a));
            }
        }
    }

    public static List<int[]> findArrays(int[] arr, int targetSum) {
        List<int[]> result = new ArrayList<>();

        for (int i = 0; i < arr.length; i++) {
            for (int j = i; j < arr.length; j++) {
                int sum = 0;
                for (int k = i; k <= j; k++) {
                    sum += arr[k];
                }
                if (sum == targetSum) {
                    result.add(Arrays.copyOfRange(arr, i, j+1));
                }
            }
        }

        return result;
    }
}
