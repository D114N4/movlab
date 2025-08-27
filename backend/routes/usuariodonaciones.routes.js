const { Router } = require('express');

const { createDonaciones, readDonaciones, updateDonaciones, deleteDonaciones } = require ('../controllers/donaci.controllers')

const userDonaciones = Router();

//Haciendo peticion get
userDonaciones.get('/', createDonaciones);

//Haciendo peticion post
userDonaciones.post('/', readDonaciones);

//Haciendo peticion put
userDonaciones.put('/', updateDonaciones);

//Haciendo peticion delete
userDonaciones.delete('/', deleteDonaciones);

module.exports = userDonaciones;