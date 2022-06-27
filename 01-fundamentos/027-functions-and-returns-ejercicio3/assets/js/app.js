// Función tradicional
function suma(numero1,numero2) {
    return numero1+numero2;
}

function resta(numero1,numero2) {
    return numero1-numero2;
}

function multiplicacion(numero1,numero2) {
    return numero1*numero2;
}

function division(numero1,numero2) {
    return numero1/numero2;
}

function promedio(numero1,numero2) {
    return (numero1+numero2)/2;
}

// Función de flecha
const suma1=(numero1,numero2) => {
    return numero1+numero2;
}

const resta1=(numero1,numero2) => {
    return numero1-numero2;
}

const multiplicacion1=(numero1,numero2) => {
    return numero1*numero2;
}

const division1=(numero1,numero2) => {
    return numero1/numero2;
}

const promedio1=(numero1,numero2) => {
    return (numero1+numero2)/2;
}

// Función de flecha reducida
const suma2=(numero1,numero2) => numero1+numero2;

const resta2=(numero1,numero2) =>  numero1-numero2;

const multiplicacion2=(numero1,numero2) => numero1*numero2;

const division2=(numero1,numero2) => numero1/numero2;

const promedio2=(numero1,numero2) => (numero1+numero2)/2;

let valor1=parseFloat(prompt("Deme el primer número"));
let valor2=parseFloat(prompt("Deme el primer número"));

separador("Función tradicional");
console.log("Suma de: "+valor1+" + "+valor2+" = "+suma(valor1,valor2));
console.log("Resta de: "+valor1+" - "+valor2+" = "+resta(valor1,valor2));
console.log("Multiplicación de: "+valor1+" * "+valor2+" = "+multiplicacion(valor1,valor2));
console.log("División de: "+valor1+" / "+valor2+" = "+division(valor1,valor2));
console.log("Promedio de: "+valor1+", "+valor2+" = "+promedio(valor1,valor2));

separador("Función de flecha");
let resultado=suma1(valor1,valor2);
console.log("Suma de: "+valor1+" + "+valor2+" = "+resultado);

resultado=resta1(valor1,valor2);
console.log("Resta de: "+valor1+" - "+valor2+" = "+resultado);

resultado=multiplicacion1(valor1,valor2);
console.log("Multiplicación de: "+valor1+" * "+valor2+" = "+resultado);

resultado=division1(valor1,valor2);
console.log("División de: "+valor1+" / "+valor2+" = "+resultado);

resultado=promedio(valor1,valor2);
console.log("Promedio de: "+valor1+", "+valor2+" = "+resultado);

separador("Función de flecha resumida con interpolación de strings");
console.log(`Suma de: ${valor1} + ${valor2} = ${suma2(valor1,valor2)}`);
console.log(`Resta de: ${valor1} - ${valor2} = ${resta2(valor1,valor2)}`);
console.log(`Multiplicación de: ${valor1} * ${valor2} = ${multiplicacion2(valor1,valor2)}`);
console.log(`División de: ${valor1} / ${valor2} = ${division2(valor1,valor2)}`);
console.log(`Promedio de: ${valor1}, ${valor2} = ${promedio2(valor1,valor2)}`);