const { Router } = require('express');

const {createAfiliados, readAfiliados, updateAfiliados, deleteAfiliados} = require ('../controllers/afili.controllers');

const userAfili = Router();

//Haciendo peticion get
userAfili.get('/', createAfiliados);

//Haciendo peticion post
userAfili.post('/', readAfiliados);

//Haciendo peticion put
userAfili.put('/', updateAfiliados);

//Haciendo peticion delete
userAfili.delete('/', deleteAfiliados);

module.exports = userAfili;
