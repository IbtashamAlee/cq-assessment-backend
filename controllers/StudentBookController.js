const StudentBookService = require('../services/StudentBookServices');

const addBorrowEntry = async (req, res) => {
  try {
    let msg = await StudentBookService.addBookBorrowEntry(req);
    res.status(200).json({
      success: true,
      data: msg
    })
  } catch (e) {
    res.status(409).json({
      success: false,
      data: null,
      msg: e.message
    })
  }
}

const getBorrowEntries = async (req, res) => {
  try {
    let result = await StudentBookService.getBorrowEntries();
    res.status(200).json({
      success: true,
      data: result
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
  addBorrowEntry,
  getBorrowEntries
}
