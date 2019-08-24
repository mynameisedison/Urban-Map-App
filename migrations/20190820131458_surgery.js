
exports.up = function(knex,Promise) {
  return knex.schema.createTable("surgerycenters", table=>{
    table.increments().notNullable();
    table.string('FacilID').notNullable().defaultTo('')
    table.string('Name').notNullable().defaultTo('')
    table.integer('latitude').notNullable().defaultTo('')
    table.integer('longitude').notNullable().defaultTo('')
    table.string('address').notNullable().defaultTo('')
    table.string('phonenumber').notNullable().defaultTo('')
  })
};

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('surgerycenters')
};
