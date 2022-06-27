let numeros = {
    numero1:0,
    numero2:0,
    numero3:0,
    numero4:0,

};
let numero = parseFloat(prompt('Introduzca el primer numero'));
numeros.numero1 = numero;

 numero = parseFloat(prompt('Introduzca el primer numero'));
numeros.numero2 = numero;


 numero = parseFloat(prompt('Introduzca el primer numero'));
numeros.numero3 = numero;


 numero = parseFloat(prompt('Introduzca el primer numero'));
numeros.numero4 = numero;


let valores = Object.values(numeros);

let promedio= (valores[0] + valores[1] + valores[2] + valores[3])/valores.length

