const express = require('express');
const route = express.Router();
const VisitantesController = require('./Controllers/VisitasController')
const RelatorioController = require('./Controllers/RelatorioController')
route.get('/',VisitantesController.index);
route.get('/dados',RelatorioController.index);
route.get('/dados/estatistica',RelatorioController.estatisticas);
route.get('/print/:Id',VisitantesController.show);
route.post('/',VisitantesController.store);
route.post('/dados/filtro',RelatorioController.filter_visitas)
route.put('/:Id',VisitantesController.update);

module.exports = route;