const imprimirDerechoFor = (inicial, final) => {
    for (let i = inicial; i <= final; i++) {
        console.log(i);
    }
}

const imprimirRevesFor = (inicial, final) => {
    for (let i = final; i >= inicial; i--) {
        console.log(i);
    }
}

const imprimirDerechoWhile = (inicial, final) => {
    let i = inicial;
    while (i <= final) {
        console.log(i);
        i++;
    }
}

const imprimirRevesWhile = (inicial, final) => {
    let i = final;
    while (i >= inicial) {
        console.log(i);
        i--;
    }
}


const imprimirDerechoDoWhile = (inicial, final) => {
    let i = inicial;
    do {
        console.log(i);
        i++;
    } while (i <= final);
}

const imprimirRevesDoWhile = (inicial, final) => {
    let i = final;
    do {
        console.log(i);
        i--;
    } while (i >= inicial);
}


let num1 = +prompt("Introduzca el primer número"),
    num2 = +prompt("Introduzca el segundo número");

// Si alguno de los valores no es un número
if (isNaN(num1) || isNaN(num2)) {
    console.log("Alguno de los valores no es un número");
}
// Si el número 1 es mayor que el número
else if (num1 > num2) {
    console.log("El primer número es mayor que el segundo");
} else {
    separador("Imprimir ascendente for");
    imprimirDerechoFor(num1, num2);

    separador("Imprimir descendente for");
    imprimirRevesFor(num1, num2);

    separador("Imprimir ascendente while");
    imprimirDerechoWhile(num1, num2);

    separador("Imprimir descendente while");
    imprimirRevesWhile(num1, num2);

    separador("Imprimir ascendente do while");
    imprimirDerechoDoWhile(num1, num2);

    separador("Imprimir descendente do while");
    imprimirRevesDoWhile(num1, num2);
}