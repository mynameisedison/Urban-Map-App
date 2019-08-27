
exports.up = function(knex,Promise) {
  return knex.schema.createTable("surgerycenters", table=>{
    table.increments('id').notNullable();
    table.string('FacilID').notNullable().defaultTo('')
    table.string('Name').notNullable().defaultTo('')
    table.string('latitude').notNullable().defaultsTo('')
    table.string('longitude').notNullable().defaultsTo('')
    table.string('address').notNullable().defaultTo('')
    table.string('phonenumber').notNullable().defaultTo('')
  })

}

exports.down = function(knex,Promise) {
  return knex.schema.dropTable('surgerycenters')
}
