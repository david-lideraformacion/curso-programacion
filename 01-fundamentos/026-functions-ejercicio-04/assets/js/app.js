const suma=function(num1, num2) {
    let resultado = num1 + num2;
    console.log('Suma de' + num1 + '+' + num2 + '=' + resultado );    
};

const resta=function(num1, num2) {
    let resultado = num1 - num2;
    console.log('Resta de' + num1 + '+' + num2 + '=' + resultado );    
};

const multiplicacion=function (num1, num2) {
    let resultado = num1 * num2;
    console.log('Multiplicacion de ' + num1 + '+' + num2 + '=' + resultado );    
};

const division=function(num1, num2) {
    let resultado = num1 / num2;
    console.log('Division de' + num1 + '+' + num2 + '=' + resultado );    
};

let valor1 = parseFloat(prompt('Deme un numero'));
let valor2 = parseFloat(prompt('Deme un numero'));

suma(valor1,valor2)
resta(valor1,valor2)
multiplicacion(valor1,valor2)
division(valor1,valor2)

