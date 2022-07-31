const knex = require('../data/db');

class BookServices {
  async getBook() {
    try {
      return knex('students')
          .join('books', { 'students.id': 'books.student_id' })
          .then(function(res) {
            if (res) {
              return res;
            }
            return "Nothing"
          });
    } catch (e) {
      throw new Error(e.message)
    }
  }
  async addEntry(data) {
    try {
      return knex('books').insert({name: data.name, student_id: data.student_id, author: data.author, borrowed_at: data.borrowed_at, expected_return_date: data.expected_return_date})
    } catch (e) {
      throw new Error(e.message)
    }
  }
}

module.exports = new BookServices();
