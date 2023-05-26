const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('config');

//mysql
const conn = require('./database/db.js');

//puerto
const puerto = config.get('servidor.puerto');
const PORT = process.env.PORT || puerto;

//app
const app = express();
//utilidades
app.set('view engine', 'ejs');
app.use(express.static('public'));

//respuesta del servidor
let respuesta = {
    error: false,
    codigo: 0,
    mensaje: '',
    parametro: '',
}

const urlencodedParser = bodyParser.urlencoded({extended: true});
app.use(bodyParser.json()) // for parsing application/json
const jsonParser = bodyParser.json();


//logica de la app
//logica de la app


//corre el servidor
app.listen(PORT, () => {
    console.log(`se conecto al: http://localhost:${PORT}`);
})