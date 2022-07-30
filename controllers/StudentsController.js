const Student = require('../services/StudentService')

const getStudents = async (req, res, next) => {
  try {
    const students = await Student.getStudents();
    res.status(200).json({
      success: true,
      data: students
    })
  } catch (e) {
    res.status(409).json({
      success: false,
      data: null,
      msg: e.message
    })
  }
}

const addStudent = async (req, res, next) => {
  try {
    const student = await Student.addStudent({first_name: req.body.first_name, last_name: req.body.last_name});
    res.status(200).json({
      success: true,
      data: student
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
  getStudents,
  addStudent
}
