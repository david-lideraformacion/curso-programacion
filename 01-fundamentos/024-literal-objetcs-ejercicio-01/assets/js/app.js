
let value1 = parseFloat(prompt('Introduce el valor 1'));
let value2 = parseFloat(prompt('Introduce el valor 2'));
let value3 = parseFloat(prompt('Introduce el valor 3'));

let values = { 
    number1:value1,
    number2:value2,
    number3:value3,
}


console.log(values);

let promedio = (values.number1+values.number2+values.number3)/3

console.log(promedio);