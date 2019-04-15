
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('sizes', tbl => {
      tbl.increments();
      tbl.float('count', 2, 2);
      tbl.timestamps(true, true);
    })

    .createTable('units', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .unique();
      tbl
        .string('abbreviation', 128)
        .notNullable()
        .unique();
      tbl.timestamps(true, true);
    })
    
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
      tbl.timestamps(true, true);
    })

};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('sizes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('units')
};
