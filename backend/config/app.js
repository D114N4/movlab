//Creando el servidor
const express = require('express');

const userRoutes = require ('../routes/tarjeta.routes');
const userAfiliados = require ('../routes/usuarioafiliados.routes');
const userDonaciones = require ('../routes/usuariodonaciones.routes');


const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//endpoints
app.use('/tarjeta', userRoutes);
app.use('/userAfiliados', userAfiliados);
app.use('/userDonaciones', userDonaciones);

//exportar app
module.exports = app;