var express = require('express');
var router = express.Router();

const knex = require('../data/db')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log(knex.select('*').from('students').then(rows => (console.log(rows))).catch(e => {console.log(e)}))
  res.send('respond with a resource');
});

module.exports = router;
