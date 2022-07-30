/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTable('students', function (table) {
    table.increments('id').primary().unsigned()
    table.string('first_name', 30).notNullable();
    table.string('last_name', 30).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("students");
};
