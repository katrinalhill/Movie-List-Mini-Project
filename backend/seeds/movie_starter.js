/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies_list').del()
  await knex('movies_list').insert([
    {id: 1, title: 'Mean Girls'},
    {id: 2, title: 'Adams Family'},
    {id: 3, title: 'Sharks in the Wild'},
    {id: 4, title: 'Zoolander'},
    {id: 5, title: 'The Mask'},
  ]);
};
