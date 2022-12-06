/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
  return knex.schema
  .createTable('movies_list', table => {
    table.increments('id'),
    table.string('title', 50);
  })
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('movies_list');
};
