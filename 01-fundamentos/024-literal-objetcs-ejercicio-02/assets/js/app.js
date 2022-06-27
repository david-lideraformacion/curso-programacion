
let num1 = parseFloat(prompt('Introduce el primer numero'));
let num2 = parseFloat(prompt('Introduce el segundo numero'));
let num3 = parseFloat(prompt('Introduce el tercer numero'));

let values = { 
    number1:num1};

let values2 = { number2:num2};

let values3 = {number3:num3};

let promedio = (values.number1, values2.number2, values3.number3)/3

console.log(values);
console.log(values2);
console.log(values3);

console.log(promedio);