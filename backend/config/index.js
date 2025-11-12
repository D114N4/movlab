//Llamando a app y databse
const app = required( './app');
const database = required ('./database');

const main = () => {
    database.connect((err) => {
        if (err) throw err;
        console.log ('Base da datos conectada');
    });
    app.listen (3066, () => {
        console.log('Servidor en puerto 3066');
    });
};

main();