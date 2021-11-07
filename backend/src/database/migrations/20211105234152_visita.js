
exports.up = function(knex) {
    return knex.schema.createTable('visitas',function(table){
        table.increments('id')
        table.string('nome').notNullable()
        table.string('cpf').notNullable()
        table.string('outro_documento')
        table.string('motivo').notNullable()
        table.boolean('status')
        table.time('entrada')
        table.time('saida')
        table.timestamp('criado_em', { useTz: true });

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('visitas')
};
