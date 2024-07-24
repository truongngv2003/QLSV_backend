# QLSV Backend

## Giới thiệu

Đây là dự án backend Quản lý sinh viên của Nguyễn Văn Trường, được xây dựng bằng Node.js và Express.js. Dự án này chứa các API xử lý yêu cầu của máy khách: đọc, thêm, sửa, xóa thông tin sinh viên.

## Cấu trúc dự án

- `.gitignore`: Các tệp và thư mục được bỏ qua bởi Git.
- `package.json`: Thông tin về dự án và các phụ thuộc.
- `package-lock.json`: Khóa phiên bản của các phụ thuộc.
- `controllers/`: Các bộ điều khiển xử lý logic ứng dụng.
- `models/`: Các mô hình dữ liệu.
- `config/`: Cấu hình ứng dụng.
- `route/`: Định tuyến cho ứng dụng.
- `insertStudent.js`: Insert data mẫu vào database.
- `server.js`: File chính của server.

## Cài đặt

### Yêu cầu hệ thống

- Node.js
- npm (Node Package Manager)

### Các bước cài đặt

1. Clone repository:

   ```sh
   git clone https://github.com/truongngv2003/QLSV_backend.git
2. Cài đặt các phụ thuộc

   ```sh
   npm install
3. Cấu hình cơ sở dữ liệu trong src/config/db.js.
4. Chạy ứng dụng:

   ```sh
   npm start

## Hướng dẫn sử dụng

- Truy cập trang chủ tại http://localhost:5000.

## Đóng góp
Nếu bạn muốn đóng góp vào dự án, vui lòng tạo pull request hoặc mở issue mới trên GitHub.

## Liên hệ
Nguyễn Văn Trường
Email: truongnguyenmailbka@gmail.com