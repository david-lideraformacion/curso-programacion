let num1 = true;
let num2 = 0;
let suma = 0;
let num1float;
let num2float;

//num1 = prompt('Introduce el primer numero:');
//num2 = prompt('Introduce el segundo numero:');
//suma = num1 + num2
//console.log(suma)


// parseint transforma el string capturado en numeros enteros 

num1 = parseInt(prompt('Introduce el primer numero'));
num2 = parseInt(prompt('Introduce el segundo numero'));
suma = num1 + num2;
console.log(suma);

// parsefloat
// transforma los valores almacenados en el prompt
// y almacena la operacion en timpo numero en la suma
num1float = parseFloat(prompt('Introduce el primer numero'));
num2float = parseFloat(prompt('Introduce el segundo numero'));
suma = num1float + num2float;
console.log(suma);

// typeof sirve para ver lo que es cada cosa [ejemplo 0= number]

console.log('num1:',typeof(num1float));