const knex = require('../data/db');

class StudentBookServices {
  async getBorrowEntries (req) {
    try {
      let borrowed = await knex('student_book')
          .join('books', 'books.id', '=', 'student_book.book_id')
          .join('students', 'students.id', '=', 'student_book.student_id')
      return borrowed;
    } catch (e) {
      throw new Error(e.message);
    }
  }
  async addBookBorrowEntry(req) {
    try {
      let book  = await knex.select('*').from('books').where({id: req.body.book_id});
      if (!book.length || book[0].copies_in_shelf === 0) {
        throw new Error("Book not available");
      }
      let isAlreadyBorrowed  = await knex.count('*').from('student_book').where({book_id: req.body.book_id, student_id: req.body.student_id});
      console.log(isAlreadyBorrowed[0])
      if (parseInt(isAlreadyBorrowed[0].count) > 0) {
        throw new Error("Already borrowed!")
      }

      await knex.transaction(async function(trx) {
        let p1 =  knex.insert({book_id: req.body.book_id, student_id: req.body.student_id}, 'id')
            .into('student_book')
            .transacting(trx);
        let p2 = knex('books').where({id: req.body.book_id}).decrement({
          copies_in_shelf: 1
        }).transacting(trx)

        await Promise.all([p1, p2])
            .then(trx.commit)
            .catch(trx.rollback);
      }).then(function(inserts) {
        console.log(inserts.length + ' new entry saved.');
      }).catch(function(error) {
            console.error(error);
          });
    } catch (e) {
      throw new Error(e.message)
    }
  }
}


module.exports = new StudentBookServices();
