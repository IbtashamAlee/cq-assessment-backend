var express = require('express');
var router = express.Router();

const {
  addStudent,
  getStudents,
} = require('../controllers/StudentsController')

router.get('/', getStudents);
router.post('/', addStudent);

module.exports = router;
