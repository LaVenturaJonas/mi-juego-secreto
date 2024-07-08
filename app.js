let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextosElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextosElementos('p', `Acertaste el nunero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        /*el usuario no acerto*/

        if (numeroDeUsuario > numeroSecreto) {
            asignarTextosElementos('p', 'el numero secreto es menor');
        } else {
            asignarTextosElementos('p', 'el numero secreto es mayor');
        }

        intentos++;
        limpiarCaja();

    }
    return;
}  


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    /*si ya sorteamos todos los numeros*/
    if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextosElementos('p','ya se sortearon todos los numeros posibles');
    } else {

        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        /*si el numero generado esta incluido en la lista*/
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    
asignarTextosElementos('h1','juego de numero secreto...');
asignarTextosElementos('p', `indica un numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos =1;
}

function reiniciarJuego() {
    /*limpiar la caja*/
    limpiarCaja();
    /*inicar mensaje de intervalo de numeros*/
    /*generar el numero aleatorio*/
    /*inicializar el numero de intentos*/
    condicionesIniciales();
    /*deshabilitar el boton de nuevo juego*/
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
