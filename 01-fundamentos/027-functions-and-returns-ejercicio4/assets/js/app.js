// Función tradicional
function suma(numero1, numero2) {
   return numero1 + numero2;
}

function resta(numero1, numero2) {
   return numero1 - numero2;
}

function multiplicacion(numero1, numero2) {
   return numero1 * numero2;
}

function division(numero1, numero2) {
   return numero1 / numero2;
}

function promedio(numero1, numero2) {
   return (numero1 + numero2)/2;
}

let valor1 = parseFloat(prompt("Deme el primer número"));
let valor2 = parseFloat(prompt("Deme el segundo número"));


function construirObjetoOperaciones(num1,num2) {
   let resultado={};

   resultado.suma=suma(num1,num2);
   resultado.resta=resta(num1,num2);
   resultado.multiplicacion=multiplicacion(num1,num2);
   resultado.division=division(num1,num2);
   resultado.promedio=promedio(num1,num2);

   return resultado;
}

let objetoResultado=construirObjetoOperaciones(valor1,valor2);

console.log(objetoResultado);