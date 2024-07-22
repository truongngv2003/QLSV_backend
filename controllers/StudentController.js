const Student = require("../models/Student");

class StudentController {
  //GET all students
  async getAllStudents(req, res) {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //GET student by studentId
  async getStudentById(req, res) {
    try {
      const students = await Student.find({ studentId: req.query.studentId });
      res.json(students);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  //POST add a student
  async addAStudent(req, res) {
    try {
      const { studentId, fullName, dateOfBirth, className, program, status } = req.body;
      const newStudent = new Student({
        studentId,
        fullName,
        dateOfBirth,
        className,
        program,
        status,
      });

      await newStudent.save();
      return res.status(201).json(newStudent);
    } catch (err) {
      if (err.name === "ValidationError") {
        return res.status(400).json({ message: err.message });
      }

      if (err.code && err.code === 11000) {
        return res.status(400).json({ message: "Student ID already exists" });
      }

      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }

  //PUT update a Student
  async updateAStudent(req, res) {
    try {
      const { studentId } = req.params;
      const { newStudentId, fullName, dateOfBirth, className, program, status } = req.body;

      const existingStudent = await Student.findOne({ studentId: newStudentId });
      if (existingStudent && existingStudent.studentId !== studentId) {
        return res.status(400).json({ message: "New Student ID already exists" });
      }

      const updatedStudent = await Student.findOneAndUpdate(
        { studentId },
        { studentId: newStudentId, fullName, dateOfBirth, className, program, status },
        { new: true, runValidators: true }
      );

      if (!updatedStudent) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.status(200).json(updatedStudent);
    } catch (err) {
      if (err.name === "ValidationError") {
        return res.status(400).json({ message: err.message });
      }
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }

  //DELETE delete a student
  async deleteAStudent(req, res) {
    try {
      const { studentId } = req.params;
      const existingStudent = await Student.findOne({ studentId });

      if (!existingStudent) {
        return res.status(404).json({ message: "Student not found" });
      }

      await existingStudent.deleteOne();
      res.status(200).json({ message: "Student deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
}

module.exports = new StudentController();
