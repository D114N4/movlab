function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;

    // Obtener el valor del género (verificar si algún radio button está seleccionado)
    var genero = document.querySelector('input[name="genero"]:checked');

    // Verificar si algún campo está vacío
    if (nombre === "" || email === "" || telefono === "" || !genero) {
        alert("Por favor, llena todos los campos antes de enviar.");
        return false;  // Impide el envío del formulario
    }

    // Si todos los campos están llenos, muestra una alerta de felicitaciones
    alert("¡Felicidades! El formulario ha sido enviado correctamente.");
    return true;  // Permite el envío del formulario
}