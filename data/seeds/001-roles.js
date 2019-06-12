
exports.seed = function(knex, Promise) {
      return knex('roles').insert([
        {Name: 'Student'},
        {Name: 'PM'},
        {Name: 'TA'}
      ]);
    };
