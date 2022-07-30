var express = require('express');
var router = express.Router();

const {
  addStudent,
  getStudents,
  // editStudent,
  // deleteStudent
} = require('../controllers/StudentsController')

// /* GET users listing. */
// router.get('/', async function(req, res, next) {
//   const result = getStudents();
//   res.send('respond with a resource');
// });

router.get('/', getStudents);
router.post('/', addStudent);

module.exports = router;
