/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package bai1_47_nguyen_huu_quy;
import java.util.Scanner;
/**
 *
 * @author iq123
 */
public class bai7 {

    public static int binarySearch(int array[], int x, int low, int high) {
        if (high >= low) {
            int mid = low + (high - low) / 2;
            if (array[mid] == x) {
                return mid;
            }
            if (array[mid] > x) {
                return binarySearch(array, x, low, mid - 1);
            }
            return binarySearch(array, x, mid + 1, high);
        }
        return 1;
    }

    public static void main(String args[]) {
        int array[] = {1, 2 ,3, 4, 5, 6, 7, 8, 9};
        int n = array.length;
        int x = 4;
        int result = binarySearch(array, x, 0, n - 1);
        if (result == -1) {
            System.out.println("Khong tim thay");
        } else {
            System.out.println("vi tri tim duoc: " + result);
        }
    }
}
