
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('ingredient_units').insert([
    {size_id: 4, unit_id: null, ingredient_id: 4}, //1 egg
    {size_id: 4, unit_id: 1, ingredient_id: 7}, //1c pasta sauce
    {size_id: 4, unit_id: 2, ingredient_id: 1}, //1lb ground beef
    {size_id: 2, unit_id: 3, ingredient_id: 2}, //.5Tbsp Flour
    // {size_id: , unit_id: , ingredient_id: },
    // {size_id: , unit_id: , ingredient_id: },
    // {size_id: , unit_id: , ingredient_id: },
    // {size_id: , unit_id: , ingredient_id: },
  ]);
};
