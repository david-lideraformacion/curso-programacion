let numerosArray=[];

while (true) {
    let numero=+prompt("Introduzca un número");
    
    // Si no es número salgo del bucle
    if (isNaN(numero)){
        break;
    }
    
    numerosArray.push(numero);

}

let multiplicacionFor=(numeros) =>{
    let multiplicacion=1;

    for (let i = 0; i < numeros.length; i++) {
        multiplicacion=multiplicacion*numeros[i];
        
    }

    return multiplicacion;
}

let multiplicacionForIn=(numeros) =>{
    let multiplicacion=1;

    for (let i in numeros) {
        multiplicacion=multiplicacion*numeros[i];
    }

    return multiplicacion;
}

let multiplicacionForOf=(numeros) =>{
    let multiplicacion=1;

    for (let numero of numeros) {
        multiplicacion=multiplicacion*numero;
    }

    return multiplicacion;
}

let multiplicacionWhile=(numeros) =>{
    let multiplicacion=1,
        i=0;
    while (i<numeros.length) {
        multiplicacion=multiplicacion*numeros[i];
        i++;
    }

    return multiplicacion;
}

let multiplicacionDoWhile=(numeros) =>{
    let multiplicacion=1,
        i=0;

    do{
        multiplicacion=multiplicacion*numeros[i];
        i++;
    }while (i<numeros.length);

    return multiplicacion;
}


separador("Bucle for");
console.log(multiplicacionFor(numerosArray));

separador("Bucle for in");
console.log(multiplicacionForIn(numerosArray));

separador("Bucle for of");
console.log(multiplicacionForOf(numerosArray));

separador("Bucle while");
console.log(multiplicacionWhile(numerosArray));

separador("Bucle do while");
console.log(multiplicacionDoWhile(numerosArray));