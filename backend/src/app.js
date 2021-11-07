var express = require('express');
const routes = require('./routes');
const cors = require('cors');
var app = express();
var port = 3000;
const horas = require('./services/horas')
app.use(cors());
app.use(express.json());
app.use(routes)
// respond with "hello world" when a GET request is made to the homepage
//var today = new Date();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}--->${horas}`)
  })