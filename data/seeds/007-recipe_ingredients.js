
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { recipe_id: 4, r_ingredient: 2},
    { recipe_id: 1, r_ingredient: 1},
    { recipe_id: 1, r_ingredient: 4},
    { recipe_id: 7, r_ingredient: 3},
  ]);
};
