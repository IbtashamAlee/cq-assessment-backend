const knex = require('../data/db');

class StudentService {
  async getStudents() {
    try {
      return knex.select('*').from('students');
    } catch (e) {
      throw new Error(e.message)
    }
  }
  async addStudent(data) {
    try {
      return knex('students').insert({first_name: data.first_name, last_name: data.last_name})
    } catch (e) {
      throw new Error(e.message)
    }
  }
  async updateStudent(data) {
    try {
      return knex('students').where({id: data.student_id}).update({first_name: data.first_name, last_name: data.last_name})
    } catch (e) {
      throw new Error(e.message)
    }
  }
}

module.exports = new StudentService();
