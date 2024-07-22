const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/StudentController');

router.get('/', StudentController.getAllStudents);

module.exports = router;