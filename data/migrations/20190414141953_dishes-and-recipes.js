
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
      
      tbl.timestamps(true, true);
    })

    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
      
      tbl
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      
      tbl.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes')
};
