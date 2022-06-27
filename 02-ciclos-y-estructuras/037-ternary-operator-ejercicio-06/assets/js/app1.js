let numero = parseInt(prompt('Introduzca el numero '))

numeroPar1 = (numero) => {

    return (numero%2===0)? 'El numero es par': 'El numero es impar'

};

numeroPar2 = (numero) => {
    
    return (numero[0]%2===0)? 'El numero es par': 'El numero es impar'
};


numeroPar3 = (numero) => {
    
    return (numero.num%2===0)? 'El numero es par': 'El numero es impar'
};



console.log(numeroPar1(numero));
console.log(numeroPar2([numero]));
console.log(numeroPar3({num:numero}));