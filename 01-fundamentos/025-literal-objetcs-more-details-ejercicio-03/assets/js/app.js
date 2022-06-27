let numeros = {
    valores:[]
};

let numero = parseFloat(prompt('Introduzca el primer numero'));
numeros.valores.push(numero);

 numero = parseFloat(prompt('Introduzca el segundo numero'));
numeros.valores.push(numero);

 numero = parseFloat(prompt('Introduzca el tercer numero'));
numeros.valores.push(numero);

 numero = parseFloat(prompt('Introduzca el cuarto numero'));
numeros.valores.push(numero);

let promedio = ( numeros.valores[0]+numeros.valores[1]+numeros.valores[2]+numeros.valores[3]+numeros.valores[4])/numeros.valores.length


console.log(numeros);
console.log(promedio);

