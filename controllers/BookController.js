const Book = require('../services/BookServices')

const getBooks = async (req, res, next) => {
  try {
    const books = await Book.getBook();
    res.status(200).json({
      success: true,
      data: books
    })
  } catch (e) {
    res.status(409).json({
      success: false,
      data: null,
      msg: e.message
    })
  }
}

const addEntry = async (req, res, next) => {
  try {
    const book = await Book.addEntry(
        {
          name: req.body.name, student_id: req.body.student_id, author: req.body.author,
          borrowed_at: req.body.borrowed_at, expected_return_date: req.body.expected_return_date
        }
    );
    res.status(200).json({
      success: true,
      data: book
    })
  } catch (e) {
    res.status(409).json({
      success: false,
      data: null,
      msg: e.message
    })
  }
}

module.exports = {
  getBooks,
  addEntry
}
