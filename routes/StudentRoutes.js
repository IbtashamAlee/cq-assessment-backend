var express = require('express');
var router = express.Router();

const {
  addStudent,
  getStudents,
  updateStudent
} = require('../controllers/StudentsController')

router.get('/', getStudents);
router.post('/', addStudent);
router.put('/', updateStudent);

module.exports = router;
