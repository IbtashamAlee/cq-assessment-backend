var express = require('express');
var router = express.Router();
const knex = require('../data/db');

const {
  getBooks,
  updateBook,
  addEntry,
} = require('../controllers/BookController')

router.get('/', getBooks);
router.post('/', addEntry);
router.put('/', updateBook);

module.exports = router;
