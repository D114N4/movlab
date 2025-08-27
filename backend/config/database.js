//DATABASE MYSQL

const database = myql2.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'movimiento_laborista',
});

//exportar database
module.export = database;