//EJERCICIO MINI PROYECTO: CAJERO AUTOMÁTICO.

let cuentas = [
    {nombre: 'Juan' , saldo: 400 , password: '12345' },
    {nombre: 'Maria', saldo: 300 , password: 'word100'},
    {nombre: 'Carlos' , saldo: 100, password: '4nt0'}
];

let cuenta = prompt('Ingresa a que nombre se encuentra la cuenta: Juan, Maria o Carlos');

let contraseña = prompt('Ingresa la contraseña de: ' + cuenta);

if (cuenta === cuentas[0].nombre && contraseña === cuentas[0].password){
    Menu(cuentas[0].nombre, cuentas[0].saldo);
    
    
}else if (cuenta === cuentas[1].nombre && contraseña === cuentas[1].password){
    Menu(cuentas[1].nombre, cuentas[1].saldo);

} else if (cuenta === cuentas[2].nombre && contraseña === cuentas[2].password){
    Menu(cuentas[2].nombre, cuentas[2].saldo);

} else {
    console.log ('Usuario o Contraseña incorrectos, favor de reingresar nuevamente sus datos')
}

function Menu( datos, saldo ){
    console.log('Bienvenido a tu cuenta '+ datos );
    let opcion = prompt('Ingrese el número del movimiento que desea realizar: \n(1)Consultar saldo, \n(2)Depósito  \n(3)Retiro \n(4)Salir');
    opcion = Number(opcion);
    if (opcion === 1){
        ImprimirSaldo(saldo);
    } else if (opcion === 2){
        IngresarMonto(saldo);
    } else if (opcion ===3){
        RetirarMonto(saldo);
    } else if(opcion === 4){
        return console.log('FIN');
    } else {
        return console.log( 'Opcion incorrecta, favor de ingresar una de las opciones mostradas');
    }
}

function ImprimirSaldo(totalSaldo){
        return console.log('Tu saldo actual es de: $'+ totalSaldo + '.00');
}
function IngresarMonto(totalSaldo){
    let montoDeposito = prompt('Ingresa la cantidad que desea depositar')
        montoDeposito = Number(montoDeposito);
        console.log('El monto a ingresar es de: ' + montoDeposito + '.00')
    let sumaDepositoSaldo = montoDeposito + totalSaldo;
        if(sumaDepositoSaldo <= 990){
           return console.log('Su nuevo saldo es de: '+ sumaDepositoSaldo + '.00');
        } else{
            return console.log('La cantidad que ingresó excede el saldo total permitido que es de $990.00');
        }
        
}
function RetirarMonto(totalSaldo){
    let montoRetiro = prompt('Ingresa la cantidad que desea retirar')
        montoRetiro = Number(montoRetiro);
        console.log('El monto a retirar es de: ' + montoRetiro + '.00')
    let restaRetiroSaldo = totalSaldo - montoRetiro;
        if(restaRetiroSaldo >= 10){
           return console.log('Su nuevo saldo es de: '+ restaRetiroSaldo + '.00');
        } else{
            return console.log('La cantidad que ingresó no es válida, debe mantener un saldo mínimo de $10.00 en su cuenta');
        }

}
