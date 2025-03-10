
/* Traemos los componentes que vamos a utilizar para realizar la validación de los campos */
const inputNombre = document.getElementById('nombre');
const inputApellidos = document.getElementById('apellidos');
const inputEmail = document.getElementById('email');
const radio1 = document.getElementById('inlineRadio1');
const radio2 = document.getElementById('inlineRadio2');
const radio3 = document.getElementById('inlineRadio3');
const checkboxTerms = document.getElementById('exampleCheck1');
const buttonSubmit = document.getElementById('button-submit');

// Deshabilitamos el botón del formularo ya que incialmente los campos están vacíos.
buttonSubmit.classList.add('button-disabled');
buttonSubmit.disabled = true;

// Ocultar ambas alertas al principio
document.getElementById("alerta-success").style.display = "none";
document.getElementById("alerta-danger").style.display = "none";

//--------------------------------------- Función para validar que todos los campos del formulario hayan sido llenados ---------------------------------------------------------
function validarCampos() {
    const nombreUsuario = inputNombre.value;
    const inputapellidos = inputApellidos.value;
    const inputemail = inputEmail.value;
    const radioB1 = radio1.checked;
    const radioB2 = radio2.checked;
    const radioB3 = radio3.checked;
    const checkboxTermsConditions = checkboxTerms.checked;


    //Verificamos que exista contenido en los campos de formulario, es decir que el valor del campo no sea vacío.
    if (nombreUsuario && inputapellidos && inputemail && inputEmail.validity.valid && (radioB1 || radioB2 || radioB3) && checkboxTermsConditions) {
        buttonSubmit.classList.remove('button-disabled');
        buttonSubmit.disabled = false;
    } else {
        buttonSubmit.classList.add('button-disabled');
        buttonSubmit.disabled = true;
    }

}

// Agregamos escucha de eventos a cada uno de los campos de entrada para llamar a la función validarCampos cuando se ingrese o modifique texto:
inputNombre.addEventListener('input', validarCampos);
inputApellidos.addEventListener('input', validarCampos);
inputEmail.addEventListener('input', validarCampos);
radio1.addEventListener('change', validarCampos);
radio2.addEventListener('change', validarCampos);
radio3.addEventListener('change', validarCampos);
checkboxTerms.addEventListener('input', validarCampos);


// ----------------------------------------------  Añadimos el escucha de eventos al botón a través de una función anónima.  ----------------------------------------------------------
buttonSubmit.addEventListener('click', function () {
    // Obtener la lista de datos de usuario existentes del localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    //Obtenemos los valores de los campos.
    const nombreUsuario = inputNombre.value;
    const apellidoPaterno = inputApellidos.value;
    const inputemail = inputEmail.value;
    const radioSeleccionado = obtenerRadioSeleccionado();


    //Creamos un objeto JavaScript para proceder a generar el formato JSON
    const usuarioJSON = {
        "name": nombreUsuario,
        "lastNames": apellidoPaterno,
        "email": inputemail,
        "genero": radioSeleccionado,
    };

    // Agregar el nuevo producto a la lista
    usuarios.push(usuarioJSON);

    try {
        // Intentar actualizar el localStorage con la lista de usuarios actualizada
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        //Código para aparecer y desaparecer alertas (aparece la alerta-success)
        document.getElementById("alerta-success").style.display = "block";
    } catch (error) {
        console.log("error al guardar los datos");
        // En caso de error al actualizar el localStorage mostramos una alerta-danger
        document.getElementById("alerta-danger").style.display = "block";
    }
});

// Función para obtener el radio button seleccionado
function obtenerRadioSeleccionado() {
    // Selecciona todos los radio buttons con el nombre "inlineRadioOptions"
    const radios = document.querySelectorAll('input[name="inlineRadioOptions"]');
    let radioSeleccionado = ''; // Variable para almacenar el valor del radio button seleccionado

    // Itera sobre cada radio button
    radios.forEach(radio => {
        // Verifica si el radio button está marcado (seleccionado)
        if (radio.checked) {
            // Si está marcado, asigna su valor a la variable radioSeleccionado
            radioSeleccionado = radio.value;
        }
    });
    // Retorna el valor del radio button seleccionado
    return radioSeleccionado;
}