const knex = require('../data/db');

class BookServices {
  async getBook() {
    try {
      return knex('books')
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
      return knex('books').insert({name: data.name, copies_in_shelf: data.copies_in_shelf, author: data.author})
    } catch (e) {
      throw new Error(e.message)
    }
  }
}

module.exports = new BookServices();
