let number1 = parseFloat(prompt("Introduce el primer numero"));
let number2 = parseFloat(prompt("Introduce el segundo numero"));

let numbers = [];
numbers.push(number1);
numbers.push(number2);

numbers.unshift(number1);
number2.unshift(number2);

number1 = numbers.pop();
number2 = numbers.shift();

console.log(number1 + number2);

