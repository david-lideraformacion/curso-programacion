let valor1 = parseFloat(prompt('Introduzca el primer numero'));
let valor2 = parseFloat(prompt('Introduzca el segundo numero'));

const suma = ({
      num1,
      num2 = 0
}) => {
      return num1 + num2
};

let resultado = suma({
      num1: valor1,
      num2: valor2
})

console.log(resultado);

const resta = (num1, num2 = 0) => {
      return num1 + num2
};
resultado = resta({
      num1: valor1,
      num2: valor2
})
console.log(resultado);

const multiplicacion = (num1, num2 = 0) => {
      return num1 + num2
};
resultado = multiplicacion({
      num1: valor1,
      num2: valor2
})
console.log(resultado);

const division = (num1, num2 = 0) => {
      return num1 + num2
};
resultado = division({
      num1: valor1,
      num2: valor2
})
console.log(resultado);

const promedio = (num1, num2 = 0) => {
      return num1 + num2
};
resultado = promedio({
      num1: valor1,
      num2: valor2
})
console.log(promedio);