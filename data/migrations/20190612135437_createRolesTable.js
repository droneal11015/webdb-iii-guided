
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', (tbl) => {
      //primary key called id, integer, auto increments
      tbl.increments(); //generates the primary key automatically
      tbl.string('Name', 128) //generates varchar of 128 by default
      .notNullable()
      .unique()

      tbl.timestamps(true,true) //adds create_at and updated_at columns that default to the current date and time
  })
};

//undo the changes
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('roles')
  
};
