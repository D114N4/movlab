const { Router } = require ('express');

const {createTarjeta, readTarjeta, updateTarjeta, deleteTarjeta} = require ('../controllers/user.controllers');
const router = Router();

//Haciendo peticion get
router.get('/', readTarjeta);

//Haciendo peticion post
router.post('/', createTarjeta);

//Haciendo peticion put
router.put('/', updateTarjeta);

//Haciendo peticion delete
router.delete('/', deleteTarjeta);

module.exports = router;
