//CRUDS

const readAfiliados = (req, res) => {
    const {nombre, apellido_paterno, apellido_materno, email, genero } = req.params;

    res.send(`${nombre}: ${apellido_materno}: ${apellido_paterno}: ${email}: ${genero}`);
};

const createAfiliados = (req, res) => {
    const {nombre, apellido_paterno, apellido_materno, email, genero } = req.body;

    res.send(`${nombre}: ${apellido_materno}: ${apellido_paterno}: ${email}: ${genero}`);
};

const updateAfiliados = (req, res) => {
    const {nombre, apellido_paterno, apellido_materno, email, genero } = req.params;

    res.send(`${nombre}: ${apellido_materno}: ${apellido_paterno}: ${email}: ${genero}`);
};

const deleteAfiliados = (req, res) => {
    const {nombre, apellido_paterno, apellido_materno, email, genero } = req.params;

    res.send(`${nombre}: ${apellido_materno}: ${apellido_paterno}: ${email}: ${genero}`);
};

module.exports = {
    createAfiliados,
    readAfiliados,
    updateAfiliados,
    deleteAfiliados
}