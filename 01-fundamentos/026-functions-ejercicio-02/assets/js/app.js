function suma(listaNumeros) {
    let resultado = listaNumeros[0] + listaNumeros[1];
    console.log('Suma de ' + listaNumeros[0] + ' + ' + listaNumeros[1] + ' = ' + resultado );
    // Interpolacion de strings
    
};

function resta(listaNumeros) {
    let resultado = listaNumeros[0] - listaNumeros[1];
    console.log('Resta de ' + listaNumeros[1] + ' - ' + listaNumeros[1] + ' = ' + resultado);
    
};

function multiplicacion(listaNumeros) {
    let resultado = listaNumeros[0] * listaNumeros[1];
    console.log('Multiplicacion de ' + listaNumeros[1] + ' * ' + listaNumeros[1] + ' = ' + resultado);

    
    
};

function division(listaNumeros) {
    let resultado = listaNumeros[0] / listaNumeros[1];
    console.log('Division de ' + listaNumeros[1] + ' / ' + listaNumeros[1] + ' = ' + resultado);

    
    
};

function promedio(listaNumeros) {
    let resultado = (listaNumeros[0] + listaNumeros[1])/listaNumeros.length ;
    console.log('Promedio de ' + listaNumeros[1] + ' , ' + listaNumeros[1] + ' = ' + resultado);

    
    
};

let numeros = [];

let numero = parseFloat(prompt('Deme el primer valor'));
numeros.push(numero);

numero = parseFloat(prompt('Deme el segundo valor'));
numeros.push(numero);

suma(numeros);
resta(numeros);
multiplicacion(numeros);
division(numeros);
promedio(numeros);







