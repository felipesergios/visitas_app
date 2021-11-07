
const knex = require('../database')
//const horas = require('../services/horas')
function horario_all(){
    let today = new Date();
    let horas = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return horas
}
    
module.exports = {
    
    async index(req,res){
        const results = await knex('visitas').where('status',1)
        return res.json(results)
    },
    
    async show(req,res,next){
        const id = req.params.Id
       try {
        const data = await knex('visitas').where('id', id)
        return res.json(data)
       } catch (error) {
           next(error)
       }
    },
    async store(req,res){
         const { nome,motivo,status,cpf}=req.body;
         const horas = horario_all()
         const novavisita = await knex('visitas').insert([{nome,motivo,status,entrada:horas,cpf}])
         return res.json(novavisita);
     },
     async update(req, res){
        const id = req.params.Id
        const horas = horario_all()
        const {status} = req.body;
        const data = await knex('visitas').where('id', id).update({status: status,saida:horas})
        return res.json(data);
     },
     async delete(req,res,next){
        const id = req.params.Id
       try {
        const data = await knex('visitas').where('id', id).del()
        return res.json({msg:"deleted"})
       } catch (error) {
           next(error)
       }
    },
}