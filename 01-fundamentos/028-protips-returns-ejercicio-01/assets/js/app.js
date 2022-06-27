let num1 = parseFloat(prompt('Introduzca el primer numero'));
let num2 = parseFloat(prompt('Introduzca el segundo numero'));

// SUMA
suma = (...arg) => {
   return arg[0] + arg[1];


};

suma(num1, num2);

// RESTA

resta = (...arg) => {
   return arg[0] - arg[1];



};


// MULTIPLICACION

multiplicacion = (...arg) => {
   return arg[0] * arg[1];


};


// DIVISION

division = (...arg) => {
   return arg[0] / arg[1];
   


};



// PROMEDIO

promedio = (...arg) => {
   return (arg[0] + arg[1]) / 2;

   
};


let resultado =  suma(num1,num2);

console.log(resultado);

resultado = resta(num1,num2)
console.log(resultado);
   

resultado = multiplicacion(num1,num2)
console.log(resultado);


   
 resultado = division(num1,num2)
 console.log(resultado);



resultado = promedio(num1,num2)
console.log(resultado);



suma = (...arg) => {
   let [numero1,numero2]= arg

   return numero1 + numero2 


};


suma = (...arg) => {
   let [numero1,numero2]= arg

   return numero1 + numero2 


};



suma = (...arg) => {
   let [numero1,numero2]= arg

   return numero1 + numero2 


};




resta = (...arg) => {
   let [numero1,numero2]= arg

   return numero1 - numero2 


};



multiplicacion = (...arg) => {
   let [numero1,numero2]= arg

   return numero1 * numero2 


};




division= (...arg) => {
   let [numero1,numero2]= arg

   return numero1 / numero2 


};


promedio = (...arg) => {
   let [numero1,numero2]= arg

   return (numero1 + numero2)/2


};

let resultado2 = suma(num1,num2)
console.log('El resultado de '+ num1+ '+'+ num2 + '=' + resultado2);

 resultado2 = resta(num1,num2)
console.log('El resultado de '+ num1+ '-'+ num2 + '=' + resultado2);

 resultado2 = multiplicacion(num1,num2)
console.log('El resultado de '+ num1+ '*'+ num2 + '=' + resultado2);

 resultado2 = division(num1,num2)
console.log('El resultado de '+ num1+ '/'+ num2 + '=' + resultado2);

 resultado2 = promedio(num1,num2)
console.log('El resultado de '+ num1+ '+'+ num2 + '/2' +  '=' + resultado2);








