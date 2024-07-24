const express = require('express');
const router = express.Router();

const StudentController = require('../controllers/StudentController');

router.delete('/:studentId/deleteAStudent', StudentController.deleteAStudent);
router.put('/:studentId/editAStudent', StudentController.updateAStudent);
router.post('/addAStudent', StudentController.addAStudent);
router.get('/:studentId', StudentController.getStudentById);
router.get('/', StudentController.getAllStudents);

module.exports = router;