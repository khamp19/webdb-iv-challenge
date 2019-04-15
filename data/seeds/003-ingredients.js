
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {name: 'ground beef'}, //1
    {name: 'flour'},
    {name: 'milk'},
    {name: 'eggs'},
    {name: 'tortillas'}, //5
    {name: 'mozzerella'},
    {name: 'pasta sauce'},
    {name: 'mushrooms'},
    {name: 'chicken broth'},
    {name: 'chicken'}, //10
    {name: 'noodles'},
    {name: 'cream cheese'},
    {name: 'dark chocolate'}, //13
  ]);
};
