
exports.up = function(knex) {
  return knex.schema.createTable("districts", table=>{
    table.string("id").notNullable().defaultTo('')
    table.string('boardmember').notNullable().defaultTo('')
    table.string('shapearea').notNullable().defaultTo('')
    table.string('shapelength').notNullable().defaultsTo('')
    table.string('coordinates').notNullable().defaultsTo('')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('districts')
};
