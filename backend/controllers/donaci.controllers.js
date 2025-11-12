//CRUDS

const readDonaciones = (req, res) => {
    const {nombre, apellido_paterno, apellido_materno, email, genero } = req.params;

    res.send(`${nombre}: ${apellido_materno}: ${apellido_paterno}: ${email}: ${genero}`);
};

const createDonaciones = (req, res) => {
    const {nombre, apellido_paterno, apellido_materno, email, genero } = req.body;

    res.send(`${nombre}: ${apellido_materno}: ${apellido_paterno}: ${email}: ${genero}`);
};

const updateDonaciones = (req, res) => {
    const {nombre, apellido_paterno, apellido_materno, email, genero } = req.params;

    res.send(`${nombre}: ${apellido_materno}: ${apellido_paterno}: ${email}: ${genero}`);
};

const deleteDonaciones = (req, res) => {
    const {nombre, apellido_paterno, apellido_materno, email, genero } = req.params;

    res.send(`${nombre}: ${apellido_materno}: ${apellido_paterno}: ${email}: ${genero}`);
};

module.exports = {
    createDonaciones,
    readDonaciones,
    updateDonaciones,
    deleteDonaciones
}