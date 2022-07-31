var express = require('express');
var router = express.Router();

const {
//  addStudent,
  getBooks,
  addEntry,
  // deleteStudent
} = require('../controllers/BookController')

// /* GET users listing. */
// router.get('/', async function(req, res, next) {
//   const result = getStudents();
//   res.send('respond with a resource');
// });

router.get('/', getBooks);
router.post('/', addEntry);

module.exports = router;
