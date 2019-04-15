
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {name: 'Pancakes', dish_id: 1}, //1
    {name: 'Everything Omlette', dish_id: 1},
    {name: 'Chicken Skewers', dish_id: 2},
    {name: 'Pizza Dip', dish_id: 2},
    {name: 'Tomato', dish_id: 3}, //5
    {name: 'Chicken Noodle', dish_id: 3},
    {name: 'Grannys Tacos', dish_id: 4},
    {name: 'Grannys Meatballs', dish_id: 4},
    {name: 'Cheesecake', dish_id: 5},
    {name: 'Chocolate Mousse', dish_id: 5},    
  ]);
};
