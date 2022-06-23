//CAJERO AUTOMÁTICO / DOM

//Datos de usuario
let cuentas = [
    {nombre: 'Juan' , saldo: 400 , password: '12345' },
    {nombre: 'Maria', saldo: 300 , password: 'word100'},
    {nombre: 'Carlos' , saldo: 100, password: '4nt0'}
];
let posicionUsuarioFunciones

//Funciones

function ingresar() {
    // Tomar datos de los inputs
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById('contrasenia').value;  

    // Validar los datos de los inputs
    validarUsuarioLogin(usuario, contrasenia);
}

function validarUsuarioLogin (usuario, contra) {
    let usuarioValido = false;
    for(let i = 0; i < cuentas.length; i++) {
        if(usuario === cuentas[i].nombre && contra === cuentas[i].password) {
            // Definir qué pasará si son correctos
            usuarioValido = true;
            posicionUsuarioFunciones = i;
            mostrarMenuHTML(i);
            return;
        }
    }
    // Definir qué pasará si son incorrectos
    if(!usuarioValido) {
        alert('Datos incorrectos');
    }
}

function mostrarMenuHTML(posicionUsuario){
    // Ocultar Login
    document.getElementById("main").style.display = "none";
    document.getElementById("pantallaDeposito").style.display = "none";
    document.getElementById("pantallaRetiro").style.display = "none";

    // Mostrar menú opciones
    document.getElementById("acciones").style.display = "block";

    document.getElementById("nombre-usuario").innerText = cuentas[posicionUsuario].nombre;

  
}

//Funciones para poder consultar saldo
function consultarSaldo(usuarioPosicion){
    document.getElementById("acciones").style.display = "none";

    document.getElementById("pantallaSaldo").style.display = "block";

    document.getElementById("cantidadRetiro").style.display = "none";
    
    document.getElementById("cantidadDeposito").style.display = "none";

    document.getElementById("saldoActual").innerText = cuentas[usuarioPosicion].saldo;
    }

//funciones para poder retirar
function retiro(){
    document.getElementById("acciones").style.display = "block";

    document.getElementById("cantidadRetiro").style.display = "block";

    document.getElementById("cantidadDeposito").style.display = "none";
    document.getElementById("pantallaDeposito").style.display = "none";
    document.getElementById("pantallaRetiro").style.display = "none";
    
}

function retirar(usuarioPosicion){

    let cantidadIngresadaRetiro = document.getElementById("retiro").value
    cantidadIngresadaRetiro = Number(cantidadIngresadaRetiro);
    if( isNaN(cantidadIngresadaRetiro)){
        alert('ingresa una cantidad correcta')
        retiro();
    }else{
    let restanteEnCuenta = cuentas[usuarioPosicion].saldo - Number(cantidadIngresadaRetiro);
    if(restanteEnCuenta >=10 && restanteEnCuenta <=990){
    cuentas[usuarioPosicion].saldo = restanteEnCuenta;

    document.getElementById("acciones").style.display = "none";

    document.getElementById("cantidadRetiro").style.display = "none";

    document.getElementById("pantallaRetiro").style.display = "block";

    document.getElementById("cantidadRetirada").innerText = cantidadIngresadaRetiro;
    document.getElementById("saldoFinalRetiro").innerText = restanteEnCuenta;
    }
    else{
        alert('La cantidad a retirar excede la cuota mínima a mantener en su cuenta \n Ingresa otra cantidad')
        retiro();
    }
    }
}

//Funciones para realizar depósito

function deposito(){
    document.getElementById("acciones").style.display = "block";

    // Mostrar menú opciones
    document.getElementById("cantidadDeposito").style.display = "block";

    document.getElementById("cantidadRetiro").style.display = "none";
    document.getElementById("pantallaDeposito").style.display = "none";
    document.getElementById("pantallaRetiro").style.display = "none";
}

function depositar(usuarioPosicion){
    let cantidadIngresadaDeposito = document.getElementById("deposito").value
    cantidadIngresadaDeposito = Number(cantidadIngresadaDeposito);
    if( isNaN(cantidadIngresadaDeposito)){
        alert('ingresa una cantidad correcta')
        deposito();
    }else{
    let saldoTotalDeposito = cuentas[usuarioPosicion].saldo + Number(cantidadIngresadaDeposito);
    
    if(saldoTotalDeposito >=10 && saldoTotalDeposito<= 990 ){

    document.getElementById("acciones").style.display = "none";

    document.getElementById("cantidadDeposito").style.display = "none";

    document.getElementById("pantallaDeposito").style.display = "block";

    document.getElementById("cantidadDepositar").innerText = cantidadIngresadaDeposito;
    
    document.getElementById("saldoFinalDeposito").innerText = saldoTotalDeposito;
    }
    else{
        alert('La cantidad a depositar excede el monto máximo a mantener en su cuenta \n Ingresa otra cantidad')
        deposito();
    }
}
}

//Funciones para Regresar al menú
function regresoMenu(){
    document.getElementById("pantallaDeposito").style.display = "none";
    document.getElementById("pantallaRetiro").style.display = "none";
    document.getElementById("pantallaSaldo").style.display = "none";
    mostrarMenuHTML(posicionUsuarioFunciones);
}


//Funciones para salir
function salir(){
    //mostrar inicio
    document.getElementById("main").style.display = "block";

    // ocultar menu
    document.getElementById("acciones").style.display = "none";

    document.getElementById("cantidadDeposito").style.display = "none";

    document.getElementById("cantidadRetiro").style.display = "none";
}