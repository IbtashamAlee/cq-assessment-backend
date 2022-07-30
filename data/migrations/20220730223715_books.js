/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTable("books", tbl => {
    tbl.increments('id').primary().unsigned()
    tbl.string("name").notNullable();
    tbl.string("author").notNullable();
    tbl.integer('student_id').references('students.id').unsigned().index().onDelete('CASCADE')
    tbl.timestamp('borrowed_at').defaultTo(knex.fn.now());
    tbl.timestamp('expected_return_date');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("books");
};
