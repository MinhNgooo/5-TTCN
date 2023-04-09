/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pbt1;

/**
 *
 * @author iq123
 */
public class bai17 {

    public static void main(String[] args) {
        String result = "";
        String raw = "chuyen chu dau thanh chu hoa";
        String words[] = raw.split("\\s+");
        for (String word : words) {
            result += Character.toUpperCase(word.charAt(0)) + word.substring(1) + " ";
        }
        result = result.trim();
        System.out.println(result.toString());
    }
}