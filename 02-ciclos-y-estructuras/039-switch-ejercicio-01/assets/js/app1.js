let suma=(numero1,numero2,numero3) =>{
    return numero1+numero2+numero3;
}

let resta=(numero1,numero2,numero3) =>{
    return numero1-numero2-numero3;
}

let multiplicacion=(numero1,numero2) =>{
    return numero1*numero2;
}

let division=(numero1,numero2) =>{
    return numero1/numero2;
}

let promedio=(numero1,numero2,numero3) =>{
    return (numero1+numero2+numero3)/3;
}

let raiz=(numero)=>{
    return Math.sqrt(numero);
}

let capturarValores=(numValores) => {
    let valores={};
    switch (numValores) {
        case 1:
            valores.numero1=+prompt("Introduzca el primer numero");
            break;
        case 2:
            valores.numero1=+prompt("Introduzca el primer numero");
            valores.numero2=+prompt("Introduzca el segundo numero");
            break;
        case 3:
            valores.numero1=+prompt("Introduzca el primer numero");
            valores.numero2=+prompt("Introduzca el segundo numero");
            valores.numero3=+prompt("Introduzca el tercer numero");
            break;
        default:
            break;
    }
    return valores;
}

let comprobarValores=(valores,operacion) => {
    let valoresArr=Object.values(valores);
    switch (valoresArr.length) {
        case 1:
            if (isNaN(valores.numero1)){
                return "Valores no validos"
            }
            else{
                return operacion(valores.numero1);
            }
        case 2:
            if (isNaN(valores.numero1) || isNaN(valores.numero2)){
                return "Valores no validos"
            }
            else{
                return operacion(valores.numero1,valores.numero2);
            }
            break;
        case 3:
            if (isNaN(valores.numero1) || isNaN(valores.numero2) || isNaN(valores.numero3)){
                return "Valores no validos"
            }
            else{
                return operacion(valores.numero1,valores.numero2,valores.numero3);
            }
        default:
            break;
    }
}

let opcion=+prompt("Introduzca la opción (1 - Suma, 2 - Resta, 3 - Multiplicación, 4 - División, 5 - Promedio, 6 - Raiz cuadrada)");
let numero1,
    numero2,
    numero3,
    numeros;
switch (opcion) {
    case 1:
        numeros=capturarValores(3);
        console.log(comprobarValores(numeros,suma));
        break;
    case 2:
        numeros=capturarValores(3);
        console.log(comprobarValores(numeros,resta));
        break;
    case 3:
        numeros=capturarValores(2);
        console.log(comprobarValores(numeros,multiplicacion));
        break;
    case 4:
        numeros=capturarValores(2);
        console.log(comprobarValores(numeros,division));
        break;
    case 5:
        numeros=capturarValores(3);
        console.log(comprobarValores(numeros,promedio));
        break;
    case 6:
        numeros=capturarValores(1);
        console.log(comprobarValores(numeros,raiz));
        break;
    default:
        console.log("Opcion incorrecta");
        break;
}