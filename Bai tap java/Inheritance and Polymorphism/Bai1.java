public class Person {
    //Khai báo trường với modifier protected
    protected String name;
    protected String address;
    //phương thức constructor
    public Person(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    //Ghi đè phương thức toString để trả về thông tin person
    @Override
    public String toString() {
        return "Person[Name="+name + ",Address="+address+"]";
    }
    }
public class Staff extends Person{
    protected String school;
    protected double pay;
    //constructor
    public Staff(String school, double pay, String name, String
            address) {
        super(name, address);
        this.school = school;
        this.pay = pay;
    }
    //các phương thức setter, getter
    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public double getPay() {
        return pay;
    }

    public void setPay(double pay) {
        this.pay = pay;
    }
    //ghi đè phương thức toString để trả về thông tin nhân viên
    @Override
    public String toString() {
        return
                String.format("Staff[Person[Name=%s,Address=%s],School=%s,Pay=%10.
        2f]",name, address,school,pay);
    }
}

public class Student extends Person{
    //khai báo các trường thông tin private
    private String program;
    private int year;
    private double fee;
    //constructor
    public Student(String program, int year, double fee, String
            name, String address) {
        super(name, address);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    //các phương thức setter, getter
    public String getProgram() {
        return program;
    }

    public void setProgram(String program) {
        this.program = program;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {this.year = year;
    }

    public double getFee() {
        return fee;
    }

    public void setFee(double fee) {
        this.fee = fee;
    }
    //ghi đè phương thức toString trả về thông tin Student
    @Override
    public String toString() {
        return
                String.format("Student[Person[Name=%s,Address=%s],Program=%s,Year=
                        %d,Fee=%10.2f]",name, address, program,year,fee);
    }
    public class App {
        public static void main(String[] args) {
//tạo đối tượng Staff
            Staff sf=new Staff("Bách Khoa Aptech", 15000000, "Lại Đức
                    Chung", "Hà Nội");
//hiển thị thông tin staff
                    System.out.println(sf);
//tạo đối tượng student
            Student st=new Student("HDSE", 2016, 68000000, "Trần Hải
                    Long", "Hà Nội");
                    //hiển thị thông tin sinh viên
                    System.out.println(st);
        }
    }