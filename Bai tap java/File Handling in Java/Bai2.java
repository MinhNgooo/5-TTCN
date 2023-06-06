public class DemoJP2SaveText {

    public DemoJP2SaveText() {

    }
    public class NhanVien {

        String name;
        int age;
        String address;

        public NhanVien(String name, int age, String address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        @Override
        public String toString() {
            return name + "(" + age + ")" + address;
        }
    }
    public void writeText2File(List<NhanVien> lstData) throws IOException {
        String filePath = "writeText2File.txt";
        boolean isVietTiep = false;
        File myFile = new File(filePath);
        FileOutputStream fos = new FileOutputStream(myFile, isVietTiep);
        OutputStreamWriter osw = new OutputStreamWriter(fos);
// Ghi ra file
        for (NhanVien nhanVien : lstData) {
            osw.write(nhanVien.toString());
        }
        osw.flush(); // Tống dữ liệu từ bộ nhớ tạm xuống file
        osw.close(); // Đóng kết nối tới file
    }

    public void writeTextByLine(List<NhanVien> lstData) throws
            FileNotFoundException, IOException {
        String filePath = "writeTextByLine.txt";
        boolean isVietTiep = true;
        File myFile = new File(filePath);
        FileOutputStream fos = new FileOutputStream(myFile, isVietTiep);
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(fos));
// Ghi ra file
        for (NhanVien nhanVien : lstData) {
            bw.write(nhanVien.toString());
            bw.newLine(); // thêm dòng mới gọi
        }
        bw.flush(); // Tống dữ liệu từ bộ nhớ tạm xuống file
        bw.close(); // Đóng kết nối tới file
    }

    public void readTextByLine() throws FileNotFoundException, IOException {
        String filePath = "writeTextByLine.txt";
        File myFile = new File(filePath);
        FileInputStream fos = new FileInputStream(myFile);
        BufferedReader br = new BufferedReader(new InputStreamReader(fos));
        String temp;
        int cnt = 1;
        while ((temp = br.readLine()) != null) {
            System.out.println(cnt + ". \t" + temp);
            cnt++;
        }
    }
    public static void main(String[] args) {

    }
}