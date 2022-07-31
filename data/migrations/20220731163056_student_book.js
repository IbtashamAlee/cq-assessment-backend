/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("student_book", tbl => {
    tbl.increments('id').primary().unsigned()
    tbl.integer('student_id').references('students.id').unsigned().index().onDelete('CASCADE')
    tbl.integer('book_id').references('books.id').unsigned().index().onDelete('CASCADE')
    tbl.timestamp('borrowed_at').defaultTo(knex.fn.now());
    tbl.timestamp('expected_return_date');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("student_book");
};
