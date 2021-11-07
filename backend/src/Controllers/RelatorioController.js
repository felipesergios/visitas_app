const knex = require('../database')
module.exports = {
    
    async index(req,res){
        const results = await knex('visitas')
        return res.json(results)
    },
    async filter_visitas(req,res){
        const {data_inicio,data_fim}=req.body;
        const results = await knex('visitas')
        .where('criado_em','>=',data_inicio)
        .andWhere('criado_em','<',data_fim)
        return res.json(results)
    },
    async estatisticas(req,res){
        const dados = await knex('visitas').where('status','=',1).count()
        return res.json(dados)
    }
}