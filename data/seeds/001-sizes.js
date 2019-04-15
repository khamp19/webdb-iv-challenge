
exports.seed = function (knex) {
  return knex('sizes').insert([
    { count: .25}, //1
    { count: .5}, //2
    { count: .75}, //3
    { count: 1}, //4
    { count: 2}, //5
    { count: 3}, //6
  ]);
};
