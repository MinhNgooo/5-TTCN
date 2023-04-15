package lab02;
import java.util.Scanner;
public class Student {
    public static void main(String[] args) {
//Khai bao cac bien
        String name, address;
        int age;
        double score1, score2, score3, average;
        final float bonus = 1.5f;
//Tao doi tuong nhap du lieu
        Scanner s = new Scanner(System.in);
//Nhap du lieu cho cac bien
        System.out.print("Enter name:");
        name = s.nextLine();
        System.out.print("Enter address:");
        address = s.nextLine();
        System.out.print("Enter age:");
        age = s.nextInt();
        System.out.print("Enter score 1:");
        score1 = s.nextDouble();
        System.out.print("Enter score 2:");
        score2 = s.nextDouble();
        System.out.print("Enter score 3:");
        score3 = s.nextDouble();
//Tinh trung binh diem
        average = (score1 + score2 + score3 + bonus) / 3;
//In ra man hinh thong tin sinh vien
        System.out.println("----------Student Details----------");
        System.out.println("Name: " + name);

        System.out.println("Addres:" + address);
        System.out.println("Age:" + age);
        System.out.printf("Score1: %4.2f, Score2: %4.2f, Score3: ", score1, score2, score3, bonus);
        System.out.printf("Average: %4.2f\n", average);
    }
}