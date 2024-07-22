const mongoose = require('mongoose');
const Student = require('./models/Student'); // Đảm bảo rằng đường dẫn đúng với model Student của bạn

mongoose.connect('mongodb+srv://freeCodeCampTruong:123CodeGa@cluster0.mgj6dtm.mongodb.net/QLSV?retryWrites=true&w=majority&appName=Cluster0');

const students = [
  { studentId: "20215295", fullName: "Lê Trọng Bảo An", dateOfBirth: "2003-09-15", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20210068", fullName: "Hoàng Kỳ Anh", dateOfBirth: "2003-05-18", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215306", fullName: "Nguyễn Thuý Anh", dateOfBirth: "2003-09-21", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215311", fullName: "Quách Hữu Tùng Anh", dateOfBirth: "2003-04-19", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215321", fullName: "Trần Minh Chiến", dateOfBirth: "2003-12-29", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215329", fullName: "Nguyễn Quốc Dũng", dateOfBirth: "2003-09-06", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215337", fullName: "Nguyễn Hoàng Dương", dateOfBirth: "2003-11-23", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215344", fullName: "Nguyễn Thành Đạt", dateOfBirth: "2003-09-08", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Dropped Out" },
  { studentId: "20215347", fullName: "Vũ Hải Đăng", dateOfBirth: "2003-11-28", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215350", fullName: "Đinh Nhẫn Đức", dateOfBirth: "2003-07-06", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215356", fullName: "Nguyễn Trọng Đức", dateOfBirth: "2003-08-26", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20210313", fullName: "Nguyễn Đức Hải", dateOfBirth: "2003-12-03", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215367", fullName: "Nguyễn Phúc Hiệp", dateOfBirth: "2003-11-30", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215374", fullName: "Phạm Trung Hiếu", dateOfBirth: "2003-04-23", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215379", fullName: "Lục Minh Hoàng", dateOfBirth: "2003-11-18", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215384", fullName: "Nguyễn Việt Hoàng", dateOfBirth: "2003-04-25", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20210400", fullName: "Nguyễn Vũ Hùng", dateOfBirth: "2003-02-15", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215393", fullName: "Hoàng Nguyễn Huy", dateOfBirth: "2003-11-16", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20210988", fullName: "Nhuien Tkhi Kam Tu", dateOfBirth: "2002-08-17", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20210989", fullName: "Lie Min Kyonh", dateOfBirth: "2002-06-12", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215401", fullName: "Trần Quang Khải", dateOfBirth: "2003-03-07", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215406", fullName: "Phạm Đăng Khuê", dateOfBirth: "2003-04-09", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20210515", fullName: "Nguyễn Hoàng Lâm", dateOfBirth: "2003-01-04", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215414", fullName: "Tô Thái Linh", dateOfBirth: "2003-05-01", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215422", fullName: "Bùi Anh Minh", dateOfBirth: "2003-07-10", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215427", fullName: "Hoàng Trọng Minh", dateOfBirth: "2003-02-10", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20210618", fullName: "Nguyễn Văn Nam", dateOfBirth: "2003-02-06", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215437", fullName: "Phạm Thị Thúy Ngần", dateOfBirth: "2003-03-24", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215443", fullName: "Lê Hà Phi", dateOfBirth: "2003-05-17", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215449", fullName: "Thẩm Lập Phong", dateOfBirth: "2003-02-24", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215455", fullName: "Hà Vĩnh Phước", dateOfBirth: "2003-03-17", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215464", fullName: "Hứa Hành Quân", dateOfBirth: "2003-11-23", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215467", fullName: "Trương Đình Văn Quyền", dateOfBirth: "2003-02-08", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215472", fullName: "Trần Cao Sơn", dateOfBirth: "2003-11-17", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215478", fullName: "Nguyễn Duy Tấn", dateOfBirth: "2003-05-31", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20210888", fullName: "Phạm Đình Tú", dateOfBirth: "2003-10-17", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215510", fullName: "Nguyễn Quang Tuyến", dateOfBirth: "2002-08-13", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215485", fullName: "Lê Thanh Thương", dateOfBirth: "2003-01-29", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215489", fullName: "Lương Đức Trọng", dateOfBirth: "2003-10-10", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215496", fullName: "Nguyễn Văn Trường", dateOfBirth: "2003-03-06", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" },
  { studentId: "20215517", fullName: "Lý Quang Vũ", dateOfBirth: "2003-04-28", className: "Khoa học máy tính 02-K66", program: "Khoa học Máy tính 2021", status: "Studying" }
];

const insertData = async () => {
  try {
    await Student.insertMany(students);
    console.log('Data inserted successfully!');
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    mongoose.disconnect();
  }
};

insertData();

