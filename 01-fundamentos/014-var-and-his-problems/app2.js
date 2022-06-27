//Invocar variables antes de su declaracion
// las vatiaables invoccadas posteriormente
// declaradas con var produciran como resultado undefined


console.log(myName);

var myName = 'David';

// las variables invocadas posteriormente
//declaradas con let y const produciran error 
// detendran la ejecucion del programa (no seguira leyendo)

console.log(myName2);

let myName2 = 'David';

console.log('Hola');
console.log(letmyName2);