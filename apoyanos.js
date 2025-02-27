/* Traemos los componentes que vamos a utilizar para realizar la validación de los campos */
const inputNombre = document.getElementById('input-nombre-usuario');
const inputApellido1 = document.getElementById('input-apellido-paterno');
const inputApellido2 = document.getElementById('input-apellido-materno');
const inputEmail = document.getElementById('input-email-usuario');
const radio1 = document.getElementById('inlineRadio1');
const radio2 = document.getElementById('inlineRadio2');
const radio3 = document.getElementById('inlineRadio3');
const checkboxTerms = document.getElementById('exampleCheck1');
const buttonSubmit  = document.getElementById('button-submit');


// Variable para almacenar el estado de carga de imágenes
// let imagenesCargadas = false;

// Deshabilitamos el botón del formularo ya que incialmente los campos están vacíos.
buttonSubmit.classList.add('button-disabled');
buttonSubmit.disabled = true;

// Ocultar ambas alertas al principio
document.getElementById("alerta-success").style.display = "none";
document.getElementById("alerta-danger").style.display = "none";

//--------------------------------------- Función para validar que todos los campos del formulario hayan sido llenados ---------------------------------------------------------
function validarCampos(){
    const nombreUsuario = inputNombre.value;    
    const apellidoPaterno = inputApellido1.value;
    const apellidoMaterno= inputApellido2.value;
    const emailUsuario = inputEmail.value;
    const radioB1 = radio1.checked;
    const radioB2 = radio2.checked;
    const radioB3 = radio3.checked;
    const checkboxTermsConditions = checkboxTerms.checked;
 

    //Verificamos que exista contenido en los campos de formulario, es decir que el valor del campo no sea vacío.
    if(nombreUsuario && apellidoPaterno && apellidoMaterno && emailUsuario &&  (radioB1 || radioB2 || radioB3) && checkboxTermsConditions){
        buttonSubmit.classList.remove('button-disabled'); // Cambiamos el estilo del botón
        buttonSubmit.disabled = false; // Habilitamos el botón
    } else {
        buttonSubmit.classList.add('button-disabled'); // Cambiamos el estilo del botón
        buttonSubmit.disabled = true; // Deshabilitamos el botón
    }
}

// Agregamos escucha de eventos a cada uno de los campos de entrada para llamar a la función validarCampos cuando se ingrese o modifique texto:
inputNombre.addEventListener('input', validarCampos);
inputApellido1.addEventListener('input', validarCampos);
inputApellido2.addEventListener('input', validarCampos);
inputEmail.addEventListener('input', validarCampos);
radio1.addEventListener('change', validarCampos);
radio2.addEventListener('change', validarCampos);
radio3.addEventListener('change', validarCampos);
checkboxTerms.addEventListener('input', validarCampos);


// ----------------------------------------------  Añadimos el escucha de eventos al botón a través de una función anónima.  ----------------------------------------------------------
buttonSubmit.addEventListener('click', function(){ 
    // Obtener la lista de datos de usuario existentes del localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    //Obtenemos los valores de los campos.
    const nombreUsuario = inputNombre.value;
    const apellidoPaterno = inputApellido1.value;
    const apellidoMaterno = inputApellido2.value;
    const emailUsuario = inputEmail.value;
    const radioSeleccionado = obtenerRadioSeleccionado();



    //Creamos un objeto JavaScript para proceder a generar el formato JSON
    const usuarioJSON = { 
        "name" : nombreUsuario,
        "lastName" : apellidoPaterno,
        "lastName2" : apellidoMaterno,
        "genero": radioSeleccionado,
        "email" : emailUsuario,
    
    };
    
    // Agregar el nuevo producto a la lista
    usuarios.push(usuarioJSON);

    try {
        // Intentar actualizar el localStorage con la lista de usuarios actualizada
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        //Código para aparecer y desaparecer alertas (aparece la alerta-success)
        document.getElementById("alerta-success").style.display = "block";
    } catch(error) {
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