const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/StudentController');

router.get('/:studentId', StudentController.getStudentById);
router.get('/', StudentController.getAllStudents);

module.exports = router;