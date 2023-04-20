// Obtener los elementos HTML necesarios
const display = document.getElementById('Display');
const buttons = document.getElementById('Botones');

// Variable para almacenar el primer número de la operación
let numero1 = null;

// Variable para almacenar la operación a realizar
let operacion = null;

// Función para actualizar el display con un número
function actualizarDisplay(numero) {
    display.textContent = display.textContent === '0' ? numero : display.textContent + numero;
}

// Función para realizar la operación y mostrar el resultado en el display
function realizarOperacion() {
    if (numero1 === null) {
        return;
    }

    // Obtener el segundo número de la operación
    const numero2 = parseFloat(display.textContent);

    // Realizar la operación correspondiente
    let resultado;
    switch (operacion) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            resultado = numero1 / numero2;
            break;
        case 'Raiz':
            resultado = Math.sqrt(numero1);
            break;
        default:
            return;
    }

    // Mostrar el resultado en el display
    display.textContent = resultado.toString();

    // Reiniciar las variables de la operación
    numero1 = null;
    operacion = null;
}

// Agregar un event listener para los botones
buttons.addEventListener('click', function(event) {
    const boton = event.target;

    // Si el botón presionado es un número
    if (!isNaN(boton.textContent)) {
        actualizarDisplay(boton.textContent);
    }

    // Si el botón presionado es un punto
    if (boton.id === 'ButtonPoint' && !display.textContent.includes('.')) {
        display.textContent += '.';
    }

    // Si el botón presionado es un botón de operación
    if (['ButtonPlus', 'ButtonMinus', 'ButtonMultiply', 'ButtonDivide', 'ButtonRaiz'].includes(boton.id)) {
        // Obtener el número en el display
        const numero = parseFloat(display.textContent);

        // Guardar el número como el primer número de la operación
        numero1 = numero;

        // Guardar la operación a realizar
        operacion = boton.textContent === '&radic;' ? 'raiz' : boton.textContent;

        // Limpiar el display
        display.textContent = '0';
    }

    // Si el botón presionado es el botón de limpiar
    if (boton.id === 'ButtonClear') {
        display.textContent = '0';
        numero1 = null;
        operacion = null;
    }

    // Si el botón presionado es el botón de igual
    if (boton.id === 'ButtonEquals') {
        realizarOperacion();
    }
});
