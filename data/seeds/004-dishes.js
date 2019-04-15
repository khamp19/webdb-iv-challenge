
exports.seed = function(knex, Promise) {
  return knex('dishes').insert([
    {name: 'Breakfasts'}, //1
    {name: 'Apps and Snacks'}, //2
    {name: 'Soups'}, //3
    {name: 'Meats'}, //4
    {name: 'Desserts'}, //5
  ]);
};
