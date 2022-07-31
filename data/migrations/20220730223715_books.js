/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTable("books", tbl => {
    tbl.increments('id').primary().unsigned()
    tbl.string("name").notNullable().unique();
    tbl.string("author").notNullable();
    tbl.integer("copies_in_shelf").notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("books");
};
