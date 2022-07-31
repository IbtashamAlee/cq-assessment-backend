var express = require('express');
var router = express.Router();
const knex = require('../data/db');

const {
  getBooks,
  addEntry,
} = require('../controllers/BookController')

router.get('/', getBooks);
router.post('/', addEntry);

module.exports = router;
