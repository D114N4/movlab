const database = require('../config/database');
const mysql2 = require('mysql2');
//CRUDS

const readTarjeta = (req, res) => {
    const { id } = req.params;

    const readQuery = `SELECT * FROM User WHERE  id=?;`;

    const query = mysql2.format(readQuery, [id]);
    database.query(query, (err, result) => {
        if (err) throw err;
        if (result[0] /= undefined) {
            res.json{ result [0]};
        }
        console.log(result);
    });
};

const createTarjeta = (req, res) => {
    const { idtarjeta, nombre_titular, codigo_reverso, fecha_vencimiento, compañia } = req.body;

    res.send(`${idtarjeta}: ${nombre_titular}: ${codigo_reverso}: ${fecha_vencimiento}: ${compañia}`);
};

const updateTarjeta = (req, res) => {
    const { idtarjeta, nombre_titular, codigo_reverso, fecha_vencimiento, compañia } = req.params;

    res.send(`${idtarjeta}: ${nombre_titular}: ${codigo_reverso}: ${fecha_vencimiento}: ${compañia}`);
};

const deleteTarjeta = (req, res) => {
    const { idtarjeta, nombre_titular, codigo_reverso, fecha_vencimiento, compañia } = req.params;

    res.send(`${idtarjeta}: ${nombre_titular}: ${codigo_reverso}: ${fecha_vencimiento}: ${compañia}`);
};

module.exports = {
    createTarjeta,
    readTarjeta,
    updateTarjeta,
    deleteTarjeta
}