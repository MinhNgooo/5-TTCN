class Main {
    void createFolder(String path) {
        File folder = new File(path);
        if (folder.exists()) {
            System.out.println("Tồn tại đường dẫn này");
            if (folder.isDirectory()) {
                System.out.println("Tồn tại thư mục này");
            }
        } else {
// Không tồn tại thì tạo mới
            folder.mkdirs();
            System.out.println("KHÔNG Tồn tại đường dẫn này, đã tạo mới");
        }
    }
    void createFile(String path) {
        File file = new File(path);
        if (file.exists()) {
            System.out.println("Tồn tại file này");
        } else {
            try {
// Không tồn tại thì tạo mới
                file.createNewFile();
            } catch (IOException ex) {
                System.out.println("Lỗi tạo file: " + ex.toString());
            }
            System.out.println("KHÔNG Tồn tại file này, đã tạo mới");
        }
    }
    static void main() {

    }
}