import java.util.Scanner;
/**
 * @author CHUNGLD
 */
public class Employee {
    public static void main(String[] args) {
//Khai bao bien
        String employeeId, firstName, lastName, birthDay;
        int totalHours,bonus;
        final float payForHour= 150f;
        double salary;
//Tao doi tuong nhap lieu
        Scanner s=new Scanner(System.in);
//Nhap du lieu cho cac bien
        System.out.print("Enter Id:");
        employeeId=s.nextLine();
        System.out.print("Enter FirstName: ");
        firstName=s.nextLine();
        System.out.print("Enter LastName: ");
        lastName=s.nextLine();
        System.out.print("Enter Birthday: ");
        birthDay=s.nextLine();
        System.out.print("Enter total of hours: ");
        totalHours=s.nextInt();
//Tinh thuong
        if(totalHours>=0 && totalHours<=200)
        {
            if(totalHours<=20)
                bonus=0;
            else if(totalHours<=50)
                bonus=200;
            else if(totalHours<=80)
                bonus=500;
            else if(totalHours<100)
                bonus=800;
            else if(totalHours<150)
                bonus=1000;
            else
                bonus=1500;
        }
        else
        {
            System.out.println("Total of hours is invalid,Values
                    will reset zero");
                    bonus=0;
            totalHours=0;
        }
//Tinh tong luong
        salary=totalHours*payForHour+bonus;
        //In ket qua len man hinh
        System.out.println("-----------Employee Details-----------
                        -");
                System.out.println("Employee Id: " + employeeId);
        System.out.printf("FullName: %s %s\n",firstName,lastName);
        System.out.println("Birthday: " + birthDay);
        System.out.printf("Total of hours: %d \n",totalHours);
        System.out.printf("Bonus: $%d \n", bonus);
        System.out.printf("Salary: $%7.2f \n",salary);
    }
}