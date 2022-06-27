let valor1,
    valor2;

// Forma simple imprimir los impares comprobando dentro
// del while si es par o no e imprimirlo
const imprimirImpares=(inicial, final) => {
    let i=inicial;
    while (i<=final){
        if (i%2!=0){
            console.log(i);
        }
        i++;
    }
}

// Forma elaborada
// Calcular en función de si es par o no
// el punto inicial del while e ir sumando de dos en dos
const imprimirImpares1=(inicial, final) => {
    let i=inicial;
    
    if (inicial%2===0){
        i=inicial+1;
    }

    while (i<=final){
        console.log(i);
        i=i+2;
    }
}

// Pido valores hasta que el usuario introduzca dos valores validos
while (isNaN(valor1) || isNaN(valor2)) {
    valor1=+prompt("Introduzca el primer valor");
    valor2=+prompt("Introduzca el segundo valor");
}

imprimirImpares(valor1,valor2);
imprimirImpares1(valor1,valor2);
