var express = require('express');
var router = express.Router();

const {
  getBorrowEntries,
  addBorrowEntry,
} = require('../controllers/StudentBookController')

router.get('/', getBorrowEntries);

router.post('/', addBorrowEntry);

module.exports = router;
