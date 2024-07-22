const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  className: {
    type: String,
    required: true
  },
  program: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['Studying', 'Dropped Out', 'Graduated'],
    default: 'Studying'
  }
});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;
