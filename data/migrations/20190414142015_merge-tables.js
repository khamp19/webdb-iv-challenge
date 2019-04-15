
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('ingredient_units', tbl => {
      tbl.increments();
      tbl
        .integer('size_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('sizes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('unit_id')
        .unsigned()
        .references('id')
        .inTable('units')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.timestamps(true, true);
    })

    .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('r_ingredient')
        .unsigned()
        .references('id')
        .inTable('ingredient_units')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredient_units')
};
