
exports.up = function(knex,Promise) {
  return knex.schema.createTable("surgerycenters", table=>{
    table.increments('id').notNullable();
    table.string('FacilID').notNullable().defaultTo('')
    table.string('Name').notNullable().defaultTo('')
    table.string('latitude').notNullable().defaultTo('')
    table.string('longitude').notNullable().defaultTo('')
    table.string('address').notNullable().defaultTo('')
    table.string('phonenumber').notNullable().defaultTo('')
  })
}

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('surgerycenters')
}
