/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package bai1_47_nguyen_huu_quy;

/**
 *
 * @author iq123
 */
public class bai8 {
     public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9}; 
        int n = arr.length; 
        int newValue = 4;

        int[] newArr = new int[n+1];

        int i = 0;
        while(i < n && arr[i] < newValue){
            newArr[i] = arr[i];
            i++;
        }

        newArr[i] = newValue;

        while(i < n){
            newArr[i+1] = arr[i];
            i++;
        }
        System.out.println("Mang moi:");
        for (int k = 0; k < n + 1; k++) {
            System.out.print(newArr[k] + " ");
        }
    }
}
