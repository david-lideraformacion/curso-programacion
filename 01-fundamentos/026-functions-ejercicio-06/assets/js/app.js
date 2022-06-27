const suma=function (listaNumeros) {
    let resultado = listaNumeros.numero1 + listaNumeros.numeros2;
    console.log('Suma de ' + listaNumeros.numero1 + ' + ' + listaNumeros.numeros2 + ' = ' + resultado );
    
};


const resta = function (listaNumeros) {
    let resultado = listaNumeros.numero1 - listaNumeros.numeros2;
    console.log('Suma de ' + listaNumeros.numero1 + ' - ' + listaNumeros.numeros2 + ' = ' + resultado );
    
};

const multiplicacion=function (listaNumeros) {
    let resultado = listaNumeros.numero1 * listaNumeros.numeros2;
    console.log('Suma de ' + listaNumeros.numero1 + ' * ' + listaNumeros.numeros2 + ' = ' + resultado );
    
};

const division=function (listaNumeros) {
    let resultado = listaNumeros.numero1 / listaNumeros.numeros2;
    console.log('Suma de ' + listaNumeros.numero1 + ' / ' + listaNumeros.numeros2 + ' = ' + resultado );
    
};

const promedio=function (listaNumeros) {
    let resultado = (listaNumeros.numero1 + listaNumeros.numeros2)/2;
    console.log('Suma de ' + listaNumeros.numero1 + ' , ' + listaNumeros.numeros2 + ' = ' + resultado );
    
};

let numeros = {
    numero1: 0,
    numero2: 0
};

numeros.numero1 = parseFloat(prompt('Deme el primer valor'));
numeros.numero2 = parseFloat(prompt('Deme el segundo valor'));

suma(numeros);
resta(numeros);
multiplicacion(numeros);
division(numeros);
promedio(numeros);
suma(numeros);








