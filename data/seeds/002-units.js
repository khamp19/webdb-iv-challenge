
exports.seed = function(knex) {
  return knex('units').insert([
    {name: 'cup', abbreviation: 'c'},
    {name: 'pound', abbreviation: 'lb'},
    {name: 'tablespoon', abbreviation: 'Tbsp'},
    {name: 'teaspoon', abbreviation: 'tsp'},
    {name: 'ounces', abbreviation: 'oz'},
    {name: 'pint', abbreviation: 'pt'},
    {name: 'quart', abbreviation: 'qt' },
  ]);
};
