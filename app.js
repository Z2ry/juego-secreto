//conexion entre javascript y html usando document.quaryselector
//es un objeto de tipo html
//escoges el head y el parrafo osea h1,h2,etc... y p
// === es para que sea igual el valor y el tipo de dato
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento( elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el Numero en ${intentos} ${(intentos === 1)?'vez': 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El Numero Secreto es Menor');
        } else {
            asignarTextoElemento('p', 'El Numero Secreto es Mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }
    else {
        // si el numero generado esta incluido en la lista
        //metodo includes checa si ese numero esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        //recursividad entra la funcion asi misma
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto!');
    asignarTextoElemento('p', `Indica un Número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // mensaje de intervalo de numeros
    // generar numero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();