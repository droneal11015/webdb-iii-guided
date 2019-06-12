exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
      tbl.increments();
  
      tbl.string('name', 128).notNullable();
  
      // foreign key
      tbl
        .integer('role_id')
        .unsigned()
        .references('id')
        .inTable('roles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  
      tbl.timestamps(true, true);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  };