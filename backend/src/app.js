
//Creando el servidor
const express = require('express');
const myql2 = required ('mysql2');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//HTTP
//Haciendo peticion get
app.get('/', (req, res) => {
    res.send('peticion GET');
});

//Haciendo peticion post
app.post('/', (req, res) => {
    const { email, nombre} = req.body;
    res.send(`${email}: ${nombre}`);
});

//Haciendo peticion put
app.put('/', (req, res) => {
    res.send('peticion PUT');
});

//Haciendo peticion delete
app.delete('/', (req, res) => {
    res.send('peticion DELETE');
});

//DATABASE MYSQL

const connection = myql2.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'movimiento_laborista',
});

//Comprobando si esta conectada
connection.connect ((err) => {
    if (err) throw err;
    console.log('BD conectada');
});

/*
//MOSTRAR TABLAS DE MYSQL
const querySQL = 'SHOW TABLES:';
connection.query(querySQL, (err, res) =>{
    if (err) throw err;
    console.log('respuesta SQL', res);
});
*/

//Recibiendo datos afiliados
const insertQuery = 'INSERT INTO usuarioafiliados (nombre, apellido_paterno, apellido_materno, email, genero) VALUES (fernando, maldonado, gutierrez, fer_maldogu@gmail.com, masculino);';

connection.query(insertQuery, (err, res)=> {
    if (err) throw err;
    console.log('respuestas insertada', res)
})
const getquery = 'SELECT * FROM usuarioafiliados';
connection.query(getquery, (err, res) => {
    if (err) throw err;
    console.log('respuesta get', res)
});

//Recibiendo datos donaciones
const insertaQuery = 'INSERT INTO usuariodonaciones (nombre, apellido_paterno, apellido_materno, email, genero) VALUES (fernando, maldonado, gutierrez, fer_maldogu@gmail.com, masculino);';

connection.query(insertaQuery, (err, res)=> {
    if (err) throw err;
    console.log('respuestas insertada', res)
})
const getQuery = 'SELECT * FROM usuariodonaciones';
connection.query(getQuery, (err, res) => {
    if (err) throw err;
    console.log('respuesta get', res)
});

//Utilizando el servidor
app.listen(3036, () => {
    console.log('Servidor encendido');
});